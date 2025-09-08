import { useState } from "react";
import "../css/createMealForm.css";
import FoodCard from "./Foodcard.jsx";

const CreateMealForm = ({ onSaveMeals, foods }) => {
  const [mealFormData, setMealFormData] = useState({
    name: "",
    serving: "1",
    foods: [],
    nutritionTotals: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      sugar: 0,
      sodium: 0,
      cholesterol: 0,
      potassium: 0,
      unsaturatedFat: 0,
      saturatedFat: 0,
    },
  });

  const [showFoodList, setShowFoodList] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [showAmountInput, setShowAmountInput] = useState(false);
  const [amount, setAmount] = useState("100");

  const calculateNutrition = (food, amount) => {
    const multiplier = amount / 100;
    return {
      calories: (food.calories || 0) * multiplier,
      protein: (food.protein || 0) * multiplier,
      carbs: (food.carbs || 0) * multiplier,
      fat: (food.fat || 0) * multiplier,
      fiber: (food.fiber || 0) * multiplier,
      sugar: (food.sugar || 0) * multiplier,
      sodium: (food.sodium || 0) * multiplier,
      cholesterol: (food.cholesterol || 0) * multiplier,
      potassium: (food.potassium || 0) * multiplier,
      unsaturatedFat: (food.unsaturatedFat || 0) * multiplier,
      saturatedFat: (food.saturatedFat || 0) * multiplier,
    };
  };

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
    setShowAmountInput(true);
  };

  const handleAmountSubmit = () => {
    const parsedAmount = parseInt(amount);
    if (amount && !isNaN(parsedAmount) && parsedAmount > 0) {
      const nutrition = calculateNutrition(selectedFood, parsedAmount);
      // Round nutrition values
      Object.keys(nutrition).forEach((key) => {
        nutrition[key] = Number(nutrition[key].toFixed(1));
      });

      const newFood = {
        id: selectedFood.id,
        name: selectedFood.name,
        amount: parsedAmount,
        nutrition: nutrition,
      };

      setAmount("100"); // Reset amount input
      setMealFormData((prev) => {
        const updatedFoods = [...prev.foods, newFood];
        const newTotals = updatedFoods.reduce((totals, food) => {
          Object.keys(food.nutrition).forEach((key) => {
            totals[key] = (totals[key] || 0) + food.nutrition[key];
          });
          return totals;
        }, {});

        return {
          ...prev,
          foods: updatedFoods,
          nutritionTotals: newTotals,
        };
      });
    }
  };

  const handleChange = (e) => {
    setMealFormData({ ...mealFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (mealFormData.foods.length === 0) {
        alert("Please add at least one food to the meal!");
        return;
      }

      const newMeal = {
        ...mealFormData,
        id: Date.now().toString(),
        serving: mealFormData.serving || "1",
        nutritionTotals: {
          calories: Number(mealFormData.nutritionTotals.calories.toFixed(1)),
          protein: Number(mealFormData.nutritionTotals.protein.toFixed(1)),
          carbs: Number(mealFormData.nutritionTotals.carbs.toFixed(1)),
          fat: Number(mealFormData.nutritionTotals.fat.toFixed(1)),
          fiber: Number(mealFormData.nutritionTotals.fiber.toFixed(1)),
          sugar: Number(mealFormData.nutritionTotals.sugar.toFixed(1)),
          sodium: Number(mealFormData.nutritionTotals.sodium.toFixed(1)),
          cholesterol: Number(
            mealFormData.nutritionTotals.cholesterol.toFixed(1)
          ),
          potassium: Number(mealFormData.nutritionTotals.potassium.toFixed(1)),
          unsaturatedFat: Number(
            mealFormData.nutritionTotals.unsaturatedFat.toFixed(1)
          ),
          saturatedFat: Number(
            mealFormData.nutritionTotals.saturatedFat.toFixed(1)
          ),
        },
      };

      onSaveMeals(newMeal);

      setMealFormData({
        name: "",
        serving: "1",
        foods: [],
        nutritionTotals: {
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          fiber: 0,
          sugar: 0,
          sodium: 0,
          cholesterol: 0,
          potassium: 0,
          unsaturatedFat: 0,
          saturatedFat: 0,
        },
      });
    } catch (error) {
      console.error("Error submitting meal:", error);
      alert("There was an error creating the meal. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ height: "80vh" }}>
      <div className="p-4 rounded fs-3 shadow-sm mb-4">
        <h2 className="mb-4 text-center">Create New Meal</h2>
        <div className="mb-3">
          <label htmlFor="meal-name" className="form-label">
            Meal Name
          </label>
          <input
            type="text"
            className="form-control fs-5"
            id="meal-name"
            name="name"
            value={mealFormData.name}
            onChange={handleChange}
            placeholder="Required"
            required
          />
        </div>
      </div>
      <div className="p-4 rounded shadow-sm">
        <h2 className="mb-4 fs-4">Meal Content</h2>

        {/* Seçili Food'ların Listesi */}
        {mealFormData.foods.length > 0 && (
          <div className="selected-foods mb-4">
            <h3 className="fs-5 mb-3">Selected Foods:</h3>
            {mealFormData.foods.map((food) => (
              <div key={food.id} className="selected-food-item card mb-2 p-2">
                <div className="d-flex justify-content-between align-items-center">
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
              </div>
            ))}

            <div className="nutrition-totals mt-3 p-3 bg-light rounded">
              <h4 className="fs-5 mb-3">Meal Totals:</h4>
              <div className="row">
                <div className="col-6">
                  <p className="mb-2">
                    Calories: {mealFormData.nutritionTotals.calories.toFixed(1)}{" "}
                    kcal
                  </p>
                  <p className="mb-2">
                    Protein: {mealFormData.nutritionTotals.protein.toFixed(1)}g
                  </p>
                  <p className="mb-2">
                    Carbs: {mealFormData.nutritionTotals.carbs.toFixed(1)}g
                  </p>
                  <p className="mb-2">
                    Fat: {mealFormData.nutritionTotals.fat.toFixed(1)}g
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Food Ekleme Bölümü */}
        <div
          className="fs-5 add-food-to-meal"
          style={{ cursor: "pointer" }}
          onClick={() => setShowFoodList(!showFoodList)}
        >
          <i className="bi bi-plus-circle pe-3"></i> Add Food to Meal
        </div>
        {showFoodList && foods && foods.length > 0 && (
          <div className="add-food-section mt-3">
            <div className="row g-3">
              {foods.map((food) => (
                <div
                  key={food.id}
                  className="col-md-6 col-lg-4"
                  onClick={() => handleFoodSelect(food)}
                  style={{ cursor: "pointer" }}
                >
                  <FoodCard food={food} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-main fs-3 w-100">Track</button>
      </div>

      {/* Amount Input Modal */}
      {showAmountInput && selectedFood && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Enter Amount for {selectedFood.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowAmountInput(false);
                    setSelectedFood(null);
                    setAmount("100");
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="amount">Amount (grams)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="1"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowAmountInput(false);
                    setSelectedFood(null);
                    setAmount("100");
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    handleAmountSubmit();
                    setShowAmountInput(false);
                    setSelectedFood(null);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default CreateMealForm;
