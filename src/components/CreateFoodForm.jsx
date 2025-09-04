import { useState } from "react";

const CreateFoodForm = ({ onSaveFoods, foods }) => {
  const [formData, setFormData] = useState({
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData, "Form submitted");

    const duplicate = foods.some(
      (food) =>
        food.name.toLowerCase().trim() === formData.name.toLowerCase().trim()
    );

    if (duplicate) {
      alert("Food with this name already exists!");
      return;
    } else {
      alert("Your food is successfully submitted!");
    }

    const newFood = { ...formData, id: Date.now().toString() };

    onSaveFoods(newFood);
    // Reset form after submission
    setFormData({
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
        <label htmlFor="name" className="form-label">
          Food Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Required"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="calories" className="form-label">
          Calories per 100 gram
        </label>
        <input
          type="number"
          className="form-control"
          id="calories"
          name="calories"
          placeholder="Required"
          value={formData.calories}
          onChange={handleChange}
          required
          step="any"
        />
      </div>

      <div className="row g-3">
        <div className="col-md-4">
          <label htmlFor="carbs" className="form-label">
            Carbs (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="carbs"
            name="carbs"
            placeholder="Required"
            value={formData.carbs}
            onChange={handleChange}
            required
            step="any"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="protein" className="form-label">
            Protein (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="protein"
            name="protein"
            placeholder="Required"
            value={formData.protein}
            onChange={handleChange}
            required
            step="any"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="fat" className="form-label">
            Fat (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="fat"
            name="fat"
            placeholder="Required"
            value={formData.fat}
            onChange={handleChange}
            required
            step="any"
          />
        </div>
      </div>

      <hr className="my-4" />
      <h6 className="mb-3 text-muted">Optional Nutrition Details</h6>

      <div className="row g-3">
        <div className="col-md-4">
          <label htmlFor="unsaturatedFat" className="form-label">
            Unsaturated Fat (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="unsaturatedFat"
            name="unsaturatedFat"
            value={formData.unsaturatedFat}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="saturatedFat" className="form-label">
            Saturated Fat (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="saturatedFat"
            name="saturatedFat"
            value={formData.saturatedFat}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="fiber" className="form-label">
            Fiber (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="fiber"
            name="fiber"
            value={formData.fiber}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="sugar" className="form-label">
            Sugar (g)
          </label>
          <input
            type="number"
            className="form-control"
            id="sugar"
            name="sugar"
            value={formData.sugar}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="sodium" className="form-label">
            Sodium (mg)
          </label>
          <input
            type="number"
            className="form-control"
            id="sodium"
            name="sodium"
            value={formData.sodium}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="cholesterol" className="form-label">
            Cholesterol (mg)
          </label>
          <input
            type="number"
            className="form-control"
            id="cholesterol"
            name="cholesterol"
            value={formData.cholesterol}
            onChange={handleChange}
            step="any"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="potassium" className="form-label">
            Potassium (mg)
          </label>
          <input
            type="number"
            className="form-control"
            id="potassium"
            name="potassium"
            value={formData.potassium}
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
