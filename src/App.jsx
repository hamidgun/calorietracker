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
import {
  STORAGE_KEYS,
  loadFromStorage,
  saveToStorage,
} from "./utils/storage.js";

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

  const handleDeleteMeal = (mealId) => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this meal?")) {
      setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== mealId));
    }
  };

  const handleDeleteFood = (foodId) => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this food?")) {
      setFoods((prevFoods) => prevFoods.filter((food) => food.id !== foodId));
    }
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <DiaryPage /> },
        {
          path: "saved",
          element: (
            <SavedPage
              foods={foods}
              meals={meals}
              setMeals={setMeals}
              setFoods={setFoods}
              onDeleteMeal={handleDeleteMeal}
              onDeleteFood={handleDeleteFood}
            />
          ),
        },
        {
          path: "create",
          element: (
            <CreatePage
              foods={foods}
              setFoods={setFoods}
              meals={meals}
              setMeals={setMeals}
              onDeleteFood={handleDeleteFood}
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
