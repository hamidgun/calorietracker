import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";
// import App from "./App.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritesPage />
  </StrictMode>
);
