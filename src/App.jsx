import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DiaryPage from "./pages/DiaryPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <DiaryPage /> },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "create", element: <CreatePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
