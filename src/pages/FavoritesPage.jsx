import "../index.css";
import "../css/favoritePage.css";
import Footer from "../components/Footer";
import FoodCard from "../components/Foodcard";
import { useState } from "react";

function FavoritesPage({ foods }) {
  const [activeTab, setActiveTab] = useState({
    favoritesTab: "meals",
    sortingTab: "new",
  });

  const handleTabChange = (group, value) => {
    setActiveTab((prevTab) => ({
      ...prevTab,
      [group]: value,
    }));
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="favorite-title">Favorites</h1>
        <div className="row favorite-tab w-90 mx-auto mb-3">
          <div className="btn-group">
            <button
              onClick={() => handleTabChange("favoritesTab", "meals")}
              className={`btn ${
                activeTab.favoritesTab === "meals"
                  ? "btn-outline-main "
                  : "btn-main"
              }`}
            >
              Meals
            </button>
            <button
              onClick={() => handleTabChange("favoritesTab", "foods")}
              className={`btn ${
                activeTab.favoritesTab === "foods"
                  ? "btn-outline-main"
                  : "btn-main"
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
        {activeTab.favoritesTab === "meals" && (
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

        {activeTab.favoritesTab === "foods" && (
          <div className="mt-4">
            {foods.length === 0 ? (
              <p className="text-muted text-center">No favorite foods yet.</p>
            ) : (
              <>
                {foods.map((food) => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default FavoritesPage;
