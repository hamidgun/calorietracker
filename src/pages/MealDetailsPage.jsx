import { useParams, useNavigate } from "react-router-dom";
import "../styles/components/foodMealDetails.css";
import Footer from "../components/Footer";
import MealDetails from "../components/MealDetails";
import { useState } from "react";

const MealDetailsPage = ({ meals }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const meal = meals.find((m) => m.id === id);

  const [amount, setAmount] = useState("");

  if (!meal) {
    return (
      <div className="container mt-4">
        <p className="text-center">Meal not found.</p>
        <button className="btn btn-main" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-between navigation mb-3">
          <div className="col-1">
            <i
              className="bi bi-arrow-left"
              onClick={() => navigate("/saved?savedTab=meals")}
            ></i>
          </div>
        </div>

        <MealDetails meal={meal} amount={amount} setAmount={setAmount} />

        {/* <div className="meal-details card shadow rounded border-0 p-3 mt-4 mb-4">
          <h2 className="meal-name">{meal.name}</h2>
          <p className="meal-serving text-muted">
            Serving Size: {meal.serving || 1}
          </p>
          <div className="nutrition-info mt-3">
            <h4>Nutrition Information</h4>
            <ul className="list-unstyled">
              <li>
                Calories: {meal.nutritionTotals?.calories?.toFixed(1) || 0} kcal
              </li>
              <li>
                Protein: {meal.nutritionTotals?.protein?.toFixed(1) || 0} g
              </li>
              <li>Carbs: {meal.nutritionTotals?.carbs?.toFixed(1) || 0} g</li>
              <li>Fat: {meal.nutritionTotals?.fat?.toFixed(1) || 0} g</li>
            </ul>
          </div>

          <div className="meal-foods mt-4">
            <h4>Foods in this Meal</h4>
            {meal.foods && meal.foods.length > 0 ? (
              <div className="list-group">
                {meal.foods.map((food) => (
                  <div
                    key={food.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h6 className="mb-1">{food.name}</h6>
                      <small className="text-muted">{food.amount}g</small>
                    </div>
                    <div className="text-end">
                      <div>{food.nutrition.calories.toFixed(1)} kcal</div>
                      <small className="text-muted">
                        P: {food.nutrition.protein.toFixed(1)}g | C:{" "}
                        {food.nutrition.carbs.toFixed(1)}g | F:{" "}
                        {food.nutrition.fat.toFixed(1)}g
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted">No foods in this meal.</p>
            )}
          </div>
        </div> */}
      </div>

      <Footer />
    </>
  );
};

export default MealDetailsPage;
