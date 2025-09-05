import { useState } from "react";
import "../css/createMealForm.css";
import FoodCard from "./Foodcard.jsx";

const CreateMealForm = ({ onSaveMeals, meals, foods }) => {
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

  const calculateNutrition = (food, amount) => {
    const multiplier = amount / 100;
    return {
      calories: food.calories * multiplier,
      protein: food.protein * multiplier,
      carbs: food.carbs * multiplier,
      fat: food.fat * multiplier,
      fiber: food.fiber * multiplier,
      sugar: food.sugar * multiplier,
      sodium: food.sodium * multiplier,
      cholesterol: food.cholesterol * multiplier,
      potassium: food.potassium * multiplier,
      unsaturatedFat: food.unsaturatedFat * multiplier,
      saturatedFat: food.saturatedFat * multiplier,
    };
  };

  const handleFoodSelect = (food) => {
    const amount = prompt("Enter amount in grams:", "100");
    if (amount) {
      const nutrition = calculateNutrition(food, parseInt(amount));
      const newFood = {
        id: food.id,
        name: food.name,
        amount: parseInt(amount),
        nutrition: nutrition,
      };

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

    const duplicate = meals.some(
      (meal) =>
        meal.name.toLowerCase().trim() ===
        mealFormData.name.toLocaleLowerCase().trim()
    );

    if (duplicate) {
      alert("Meal with this name already exist!");
      return;
    } else {
      alert("Your meal is successfully submitted!");
    }

    const newMeal = { ...mealFormData, id: Date.now().toString() };

    onSaveMeals(newMeal);

    console.log("Submitted meal:", newMeal);

    setMealFormData({ name: "", serving: "1" });
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
        {showFoodList && (
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
    </form>
  );
};

export default CreateMealForm;
