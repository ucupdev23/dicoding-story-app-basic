import { LoginModel } from "./LoginModel";
import { LoginPresenter } from "./LoginPresenter";

export class LoginView {
  render() {
    return `
      <header>
        <h1>Login</h1>
        <nav>
          <a href="#/register">Register</a>
        </nav>
      </header>
      <main class="container" id="mainContent">
        <form id="loginForm" class="auth-form">
          <div class="form-group">
            <label for="emailInput">Email</label>
            <input type="email" id="emailInput" name="email" required placeholder="example@dicoding.com">
          </div>
          <div class="form-group">
            <label for="passwordInput">Password</label>
            <input type="password" id="passwordInput" name="password" required placeholder="Minimal 6 karakter">
          </div>
          <button type="submit" id="loginButton">Login</button>
          <p id="loginMessage" class="message"></p>
        </form>
      </main>
      <footer style="text-align: center; padding: 20px;">
        <p>&copy; 2025 Story App</p>
      </footer>
    `;
  }

  async afterRender() {
    console.log("LoginView afterRender dipanggil.");
    const model = new LoginModel();
    const presenter = new LoginPresenter(model, this);

    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("loginButton");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");

    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const email = emailInput.value;
      const password = passwordInput.value;
      await presenter.loginUser(email, password);
    });
  }

  showLoading() {
    const loginMessage = document.getElementById("loginMessage");
    const loginButton = document.getElementById("loginButton");
    if (loginMessage && loginButton) {
      loginMessage.innerText = "Sedang memproses login...";
      loginMessage.className = "message info";
      loginButton.disabled = true;
    }
  }

  renderLoginSuccess(user) {
    const loginMessage = document.getElementById("loginMessage");
    if (loginMessage) {
      loginMessage.innerText = `Login berhasil! Selamat datang, ${
        user.name || user.email
      }.`;
      loginMessage.className = "message success";
    }
    // Redirect setelah beberapa saat
    setTimeout(() => {
      window.location.hash = "#/stories"; // Arahkan ke halaman stories
    }, 1500); // Tunggu 1.5 detik sebelum redirect
  }

  renderLoginError(errorMessage) {
    const loginMessage = document.getElementById("loginMessage");
    const loginButton = document.getElementById("loginButton");
    if (loginMessage && loginButton) {
      loginMessage.innerText = errorMessage;
      loginMessage.className = "message error";
      loginButton.disabled = false;
    }
  }
}
