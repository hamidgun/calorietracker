import "../index.css";
import "../css/savedPage.css";
import Footer from "../components/Footer";
import FoodCard from "../components/Foodcard";
import { useState } from "react";
import { Link } from "react-router-dom";

function SavedPage({ foods }) {
  const [activeTab, setActiveTab] = useState({
    savedTab: "meals",
    sortingTab: "new",
  });

  const handleTabChange = (group, value) => {
    setActiveTab((prevTab) => ({
      ...prevTab,
      [group]: value,
    }));
  };

  const getSortedFoods = () => {
    if (activeTab.sortingTab === "A-Z") {
      return [...foods].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    } else {
      return [...foods].sort((a, b) => b.id - a.id);
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
          <div>
            <div className="card shadow rounded border-0 p-3 mt-4 mb-4 position-relative">
              <h5 className="card-title">Meal Name</h5>
              <p className="card-text">200 kcal </p>
              <p className="card-text text-muted pt-1">
                service or grammage info
              </p>
              <span className="position-absolute top-0 end-0 m-3 text-danger fs-5">
                <i className="bi bi-heart-fill"></i>
              </span>
            </div>
          </div>
        )}

        {activeTab.savedTab === "foods" && (
          <div className="mt-4">
            {foods.length === 0 ? (
              <p className="text-muted text-center">No favorite foods yet.</p>
            ) : (
              getSortedFoods().map((food) => (
                <Link to={`/food/${food.id}`}>
                  <FoodCard key={food.id} food={food} />
                </Link>
              ))
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SavedPage;
