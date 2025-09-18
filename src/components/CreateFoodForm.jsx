import { useState } from "react";

const CreateFoodForm = ({ onSaveFoods, foods }) => {
  const [foodFormData, setFoodFormData] = useState({
    name: "",
    calories: "",
    carbs: "",
    protein: "",
    fat: "",
    unsaturatedFat: "",
    saturatedFat: "",
    fiber: "",
    sugar: "",
    sodium: "",
    cholesterol: "",
    potassium: "",
  });

  const handleChange = (e) => {
    setFoodFormData({ ...foodFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(foodFormData, "Form submitted");

    const duplicate = foods.some(
      (food) =>
        food.name.toLowerCase().trim() ===
        foodFormData.name.toLowerCase().trim()
    );

    if (duplicate) {
      alert("Food with this name already exists!");
      return;
    } else {
      alert("Your food is successfully submitted!");
    }

    const newFood = { ...foodFormData, id: Date.now().toString() };

    onSaveFoods(newFood);
    // Reset form after submission
    setFoodFormData({
      name: "",
      calories: "",
      carbs: "",
      protein: "",
      fat: "",
      unsaturatedFat: "",
      saturatedFat: "",
      fiber: "",
      sugar: "",
      sodium: "",
      cholesterol: "",
      potassium: "",
    });
  };

  return (
    <form className="p-4 rounded fs-4 shadow-sm" onSubmit={handleSubmit}>
      <h2 className="mb-4 text-center">Create New Food</h2>

      <div className="mb-3">
        <label htmlFor="food-name" className="form-label">
          Food Name
        </label>
        <input
          type="text"
          className="form-control"
          id="food-name"
          name="name"
          placeholder="Required"
          value={foodFormData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="food-calories" className="form-label">
          Calories per 100 gram
        </label>
        <input
          type="number"
          className="form-control"
          id="food-calories"
          name="calories"
          placeholder="Required"
          value={foodFormData.calories}
          onChange={handleChange}
          required
          step="any"
        />
      </div>

      <div className="row g-3">
        <div className="col-12">
          <label htmlFor="food-carbs" className="form-label">
            Carbs (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="food-carbs"
            name="carbs"
            placeholder="Required"
            value={foodFormData.carbs}
            onChange={handleChange}
            required
            step="any"
          />
        </div>
        <div className="col-12">
          <label htmlFor="food-protein" className="form-label">
            Protein (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="food-protein"
            name="protein"
            placeholder="Required"
            value={foodFormData.protein}
            onChange={handleChange}
            required
            step="any"
          />
        </div>
        <div className="col-12">
          <label htmlFor="food-fat" className="form-label">
            Fat (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="food-fat"
            name="fat"
            placeholder="Required"
            value={foodFormData.fat}
            onChange={handleChange}
            required
            step="any"
          />
        </div>
      </div>

      <hr className="my-4" />
      <h6 className="mb-3 text-muted">Optional Nutrition Details</h6>

      <div className="row g-3">
        <div className="col-12">
          <label htmlFor="food-unsaturatedFat" className="form-label">
            Unsaturated Fat (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="food-unsaturatedFat"
            name="unsaturatedFat"
            value={foodFormData.unsaturatedFat}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-12">
          <label htmlFor="food-saturatedFat" className="form-label">
            Saturated Fat (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="food-saturatedFat"
            name="saturatedFat"
            value={foodFormData.saturatedFat}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="food-fiber" className="form-label">
            Fiber (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="food-fiber"
            name="fiber"
            value={foodFormData.fiber}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-12">
          <label htmlFor="food-sugar" className="form-label">
            Sugar (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="food-sugar"
            name="sugar"
            value={foodFormData.sugar}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-12">
          <label htmlFor="food-sodium" className="form-label">
            Sodium (mg)
          </label>
          <input
            type="number"
            className="form-control"
            id="food-sodium"
            name="sodium"
            value={foodFormData.sodium}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-12">
          <label htmlFor="food-cholesterol" className="form-label">
            Cholesterol (mg)
          </label>
          <input
            type="number"
            className="form-control"
            id="food-cholesterol"
            name="cholesterol"
            value={foodFormData.cholesterol}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-12">
          <label htmlFor="food-potassium" className="form-label">
            Potassium (mg)
          </label>
          <input
            type="number"
            className="form-control"
            id="food-potassium"
            name="potassium"
            value={foodFormData.potassium}
            onChange={handleChange}
            step="any"
          />
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-end">
        <button type="submit" className="fs-5 btn btn-main">
          Save Food
        </button>
      </div>
    </form>
  );
};

export default CreateFoodForm;
