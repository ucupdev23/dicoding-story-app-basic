import { StoryView } from "../pages/stories/StoryView";
import { AddStoryView } from "../pages/add-story/AddStoryView";
import { LoginView } from "../pages/login/LoginView";
import { RegisterView } from "../pages/register/RegisterView";
import StoryApiService from "../api/StoryApiService";

class AppRouter {
  constructor() {
    this.apiService = new StoryApiService();

    this.routes = {
      "/": new StoryView(),
      "/stories": new StoryView(),
      "/add": new AddStoryView(),
      "/login": new LoginView(),
      "/register": new RegisterView(),
    };

    window.addEventListener("hashchange", () => this.handleLocation());
    window.addEventListener("load", () => this.handleLocation());
  }

  async handleLocation() {
    const path = window.location.hash.substring(1) || "/";
    const view = this.routes[path];
    const appContainer = document.getElementById("app");

    const requiresAuth = ["/", "/stories", "/add"].includes(path);
    const isLoggedIn = this.apiService.isLoggedIn();

    if (requiresAuth && !isLoggedIn) {
      window.location.hash = "#/login";
      return;
    }

    if (view) {
      if (document.startViewTransition) {
        document.startViewTransition(async () => {
          appContainer.innerHTML = "";
          appContainer.innerHTML = view.render();
          if (view.afterRender) {
            await view.afterRender();
          }
        });
      } else {
        appContainer.innerHTML = "";
        appContainer.innerHTML = view.render();
        if (view.afterRender) {
          await view.afterRender();
        }
      }
    } else {
      appContainer.innerHTML =
        "<h1>404 Not Found</h1><p>Halaman tidak ditemukan.</p>";
      appContainer.innerHTML += `<p><a href="#/stories">Kembali ke Beranda</a></p>`;
    }
  }
}

export default AppRouter;
