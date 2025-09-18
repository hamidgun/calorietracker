import { useState } from "react";
import "../styles/components/createMealForm.css";
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
      const calculatedValues = calculateNutrition(selectedFood, parsedAmount);

      const newFood = {
        id: selectedFood.id,
        name: selectedFood.name,
        amount: parsedAmount,
        // Değerleri direkt olarak food objesinin içine koyuyoruz
        calories: calculatedValues.calories,
        protein: calculatedValues.protein,
        carbs: calculatedValues.carbs,
        fat: calculatedValues.fat,
        fiber: calculatedValues.fiber,
        sugar: calculatedValues.sugar,
        sodium: calculatedValues.sodium,
        cholesterol: calculatedValues.cholesterol,
        potassium: calculatedValues.potassium,
        unsaturatedFat: calculatedValues.unsaturatedFat,
        saturatedFat: calculatedValues.saturatedFat,
      };

      setMealFormData((prev) => {
        const updatedFoods = [...prev.foods, newFood];
        const newTotals = updatedFoods.reduce((totals, food) => {
          // nutrition. olmadan direkt değerlere erişiyoruz
          totals.calories = (totals.calories || 0) + food.calories;
          totals.protein = (totals.protein || 0) + food.protein;
          totals.carbs = (totals.carbs || 0) + food.carbs;
          totals.fat = (totals.fat || 0) + food.fat;
          totals.fiber = (totals.fiber || 0) + food.fiber;
          totals.sugar = (totals.sugar || 0) + food.sugar;
          totals.sodium = (totals.sodium || 0) + food.sodium;
          totals.cholesterol = (totals.cholesterol || 0) + food.cholesterol;
          totals.potassium = (totals.potassium || 0) + food.potassium;
          totals.unsaturatedFat =
            (totals.unsaturatedFat || 0) + food.unsaturatedFat;
          totals.saturatedFat = (totals.saturatedFat || 0) + food.saturatedFat;
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
    <form onSubmit={handleSubmit}>
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

        {/* List of Selected Foods */}
        {mealFormData.foods.length > 0 && (
          <div className="selected-foods mb-4">
            <h3 className="fs-5 mb-3">Selected Foods:</h3>
            {mealFormData.foods.map((food) => (
              <FoodCard key={food.id} food={food} deletable={true} />
            ))}

            <div className="nutrition-totals mt-3 p-3 shadow-sm rounded">
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

        {/* Food Adding Section */}
        <div
          className="fs-5 add-food-to-meal"
          style={{ cursor: "pointer" }}
          onClick={() => setShowFoodList(!showFoodList)}
        >
          <i className="bi bi-plus-circle pe-3"></i> Add Food to Meal
        </div>
        {showFoodList && foods && foods.length > 0 && (
          <div className="add-food-section mt-4">
            <div className="row">
              {foods.map((food) => {
                const isSelected = mealFormData.foods.some(
                  (item) => item.id === food.id
                );
                return (
                  <div
                    key={food.id}
                    className={`col-12 ${
                      isSelected ? "food-already-selected" : ""
                    }`}
                    onClick={() => !isSelected && handleFoodSelect(food)}
                    style={{
                      cursor: isSelected ? "not-allowed" : "pointer",
                      opacity: isSelected ? 0.6 : 1,
                    }}
                  >
                    <FoodCard food={food} deletable={false} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center mt-4">
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
