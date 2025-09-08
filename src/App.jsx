import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DiaryPage from "./pages/DiaryPage.jsx";
import SavedPage from "./pages/SavedPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import FoodDetailsPage from "./pages/FoodDetailsPage.jsx";
import MealDetailsPage from "./pages/MealDetailsPage.jsx";

// Storage keys as constants
const STORAGE_KEYS = {
  FOODS: "foods",
  MEALS: "meals",
};

// Helper function for safe storage operations
const loadFromStorage = (key, defaultValue = []) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    console.error(`Error loading ${key}:`, error);
    return defaultValue;
  }
};

const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key}:`, error);
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState(() => loadFromStorage(STORAGE_KEYS.FOODS));
  const [meals, setMeals] = useState(() => loadFromStorage(STORAGE_KEYS.MEALS));

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.FOODS, foods);
  }, [foods]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.MEALS, meals);
  }, [meals]);

  useEffect(() => {
    // Veri yükleme işlemi tamamlandığında
    const dataLoaded = foods !== null && meals !== null;
    setIsLoading(false);
  }, [foods, meals]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <DiaryPage /> },
        { path: "saved", element: <SavedPage foods={foods} meals={meals} /> },
        {
          path: "create",
          element: (
            <CreatePage
              foods={foods}
              setFoods={setFoods}
              meals={meals}
              setMeals={setMeals}
            />
          ),
        },
        { path: "search", element: <SearchPage /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "food/:id", element: <FoodDetailsPage foods={foods} /> },
        { path: "meal/:id", element: <MealDetailsPage meals={meals} /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
