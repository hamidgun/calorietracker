import "../styles/base.css";
import "../styles/components/savedPage.css";
import Footer from "../components/Footer";
import FoodCard from "../components/Foodcard";
import MealCard from "../components/MealCard";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function SavedPage({
  foods,
  meals,
  setMeals,
  setFoods,
  onDeleteMeal,
  onDeleteFood,
}) {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("savedTab") || "meals";

  const [activeTab, setActiveTab] = useState({
    savedTab: initialTab,
    sortingTab: "new",
  });

  const handleTabChange = (group, value) => {
    setActiveTab((prevTab) => ({
      ...prevTab,
      [group]: value,
    }));
  };

  const getSortedFoods = () => {
    if (!foods || foods.length === 0) return [];
    if (activeTab.sortingTab === "A-Z") {
      return [...foods].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    } else {
      return [...foods].sort((a, b) => b.id - a.id);
    }
  };

  const getSortedMeals = () => {
    if (!meals || meals.length === 0) return [];
    if (activeTab.sortingTab === "A-Z") {
      return [...meals].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    } else {
      return [...meals].sort((a, b) => b.id - a.id);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="favorite-title">Saved Meals & Foods</h1>
        <div className="row favorite-tab w-90 mx-auto mb-3">
          <div className="btn-group">
            <button
              onClick={() => handleTabChange("savedTab", "meals")}
              className={`btn ${
                activeTab.savedTab === "meals"
                  ? "btn-outline-main "
                  : "btn-main"
              }`}
            >
              Meals
            </button>
            <button
              onClick={() => handleTabChange("savedTab", "foods")}
              className={`btn ${
                activeTab.savedTab === "foods" ? "btn-outline-main" : "btn-main"
              }`}
            >
              Foods
            </button>
          </div>
        </div>
        <div className="row w-25 mx-auto">
          <div className="btn-group">
            <button
              type="button"
              onClick={() => handleTabChange("sortingTab", "new")}
              className={`btn ${
                activeTab.sortingTab === "new" ? "btn-outline-main" : "btn-main"
              }`}
            >
              New
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("sortingTab", "A-Z")}
              className={`btn ${
                activeTab.sortingTab === "A-Z" ? "btn-outline-main" : "btn-main"
              }`}
            >
              A-Z
            </button>
          </div>
        </div>

        {/* İçerik Alanı */}
        {activeTab.savedTab === "meals" && (
          <div className="mt-4">
            {meals.length === 0 ? (
              <p className="text-muted text-center">No meals yet.</p>
            ) : (
              getSortedMeals().map((meal) => {
                return (
                  <div
                    key={meal.id}
                    className="meal-card-container"
                    onClick={(e) => {
                      // Only navigate if not clicking on the delete button
                      if (
                        !e.target.classList.contains("bi-x") &&
                        !e.target.closest(".bi-x")
                      ) {
                        window.location.href = `/meal/${meal.id}`;
                      }
                    }}
                  >
                    <MealCard
                      meal={meal}
                      onDeleteMeal={(id) => {
                        onDeleteMeal(id);
                      }}
                    />
                  </div>
                );
              })
            )}
          </div>
        )}

        {activeTab.savedTab === "foods" && (
          <div className="mt-4">
            {foods.length === 0 ? (
              <p className="text-muted text-center">No favorite foods yet.</p>
            ) : (
              getSortedFoods().map((food) => {
                return (
                  <div
                    key={food.id}
                    className="food-card-container"
                    onClick={(e) => {
                      // Only navigate if not clicking on the delete button
                      if (
                        !e.target.classList.contains("bi-x") &&
                        !e.target.closest(".bi-x")
                      ) {
                        window.location.href = `/food/${food.id}`;
                      }
                    }}
                  >
                    <FoodCard
                      food={food}
                      deletable={true}
                      onDeleteFood={(id) => {
                        onDeleteFood(id);
                      }}
                    />
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SavedPage;
