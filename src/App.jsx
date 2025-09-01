import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DiaryPage from "./pages/DiaryPage.jsx";
import SavedPage from "./pages/SavedPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import FoodDetailsPage from "./pages/FoodDetailsPage.jsx";

function App() {
  const [foods, setFoods] = useState(() => {
    const storedFoods = localStorage.getItem("foods");
    return storedFoods ? JSON.parse(storedFoods) : [];
  });

  useEffect(() => {
    const FOODS_KEY = "foods";
    localStorage.setItem(FOODS_KEY, JSON.stringify(foods));
  }, [foods]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <DiaryPage /> },
        { path: "saved", element: <SavedPage foods={foods} /> },
        {
          path: "create",
          element: <CreatePage foods={foods} setFoods={setFoods} />,
        },
        { path: "search", element: <SearchPage /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "food/:id", element: <FoodDetailsPage foods={foods} /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
