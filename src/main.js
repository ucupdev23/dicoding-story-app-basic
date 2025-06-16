import "./style.css";
import AppRouter from "./routes/AppRouter";

document.addEventListener("DOMContentLoaded", () => {
  const router = new AppRouter();
  router.handleLocation();
});
