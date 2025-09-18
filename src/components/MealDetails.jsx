import { useEffect } from "react";

const MealDetails = ({ meal, amount, setAmount }) => {
  // Set default serving to 1 when component mounts
  useEffect(() => {
    if (!amount) {
      setAmount(1);
    }
  }, []);

  const calc = (value) => {
    if (!value) return "0";
    return (value * amount).toFixed(1); // Simply multiply by number of servings
  };

  return (
    <form action="">
      {/* meal information */}
      <div className="p-4 rounded shadow-sm mb-5">
        <h3 className="mb-4">{meal.name}</h3>
        <div className="row mb-4">
          <div className="col-2">
            <input
              type="number"
              className="form-control amount-box"
              id="meal-amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min={1}
              required
            />
          </div>
          <div className="col-10">
            <select
              className="form-control serving-box text-muted"
              name="serving"
              id="serving"
              disabled
            >
              <option value="serving">Serving</option>
            </select>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <select
              name="meals-options"
              id="meals-options"
              className="form-control meals-box text-muted"
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snacks">Snacks</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p className="fs-5">
              <i className="bi bi-fire text-danger"></i>{" "}
              {calc(meal.nutritionTotals.calories)} Kcal
            </p>
          </div>
        </div>
      </div>
      {/* foods in meal */}
      <div className="meal-content mb-4">
        <h4 className="mt-4 mb-3">Foods in this Meal</h4>
        {meal.foods && meal.foods.length > 0 ? (
          <div className="list-group">
            {/* List of foods */}
            {meal.foods.map((food) => (
              <div
                key={food.id}
                className="list-group-item shadow-sm d-flex justify-content-between align-items-center mb-2"
              >
                <div>
                  <h6 className="mb-1">{food.name}</h6>
                  <small className="text-muted">{food.amount} gram</small>
                </div>
                <div className="text-end">
                  <div>{food.calories} kcal</div>
                  <small className="text-muted">
                    P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
                  </small>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted">No foods in this meal.</p>
        )}
      </div>
      {/* nutritional information */}
      <div className="nutri-info shadow-sm">
        <div className="card border-0">
          <div className="card-header fs-3 ">Nutritional Information</div>
          <div className="card-body">
            <div className="row justify-content-between">
              <div className="col-6">
                <i className="bi bi-fire text-danger"></i> Calories
              </div>
              <div className="col-6 text-end">
                {calc(meal.nutritionTotals.calories)} kcal
              </div>
            </div>
            <hr />
            <div className="carbs-group">
              <div className="row justify-content-between">
                <div className="col-6">
                  <i className="bi bi-c-circle-fill text-warning"></i> Carbs
                </div>
                <div className="col-6 text-end">
                  {calc(meal.nutritionTotals.carbs)} g
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-6">Fiber</div>
                <div className="col-6 text-end">
                  {calc(meal.nutritionTotals.fiber)} g
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-6">Sugar</div>
                <div className="col-6 text-end">
                  {calc(meal.nutritionTotals.sugar)} g
                </div>
              </div>
            </div>
            <hr />
            <div className="protein-group">
              <div className="row justifiy-content-between">
                <div className="col-6">
                  <i className="bi bi-p-circle-fill text-success"></i> Protein
                </div>
                <div className="col-6 text-end">
                  {calc(meal.nutritionTotals.protein)} g
                </div>
              </div>
            </div>
            <hr />
            <div className="fat-group">
              <div className="row justifiy-content-between">
                <div className="col-6">
                  <i className="bi bi-circle-fill text-info"></i> Fat
                </div>
                <div className="col-6 text-end">
                  {calc(meal.nutritionTotals.fat)} g
                </div>
              </div>
              <div className="row justifiy-content-between">
                <div className="col-6">Saturated Fat</div>
                <div className="col-6 text-end">
                  {calc(meal.nutritionTotals.saturatedFat)} g
                </div>
              </div>
              <div className="row justifiy-content-between">
                <div className="col-6">Unsaturated</div>
                <div className="col-6 text-end">
                  {calc(meal.nutritionTotals.unsaturatedFat)} g
                </div>
              </div>
            </div>
            <hr />
            <div className="others-group">
              <div className="row justifiy-content-between">
                <div className="col-6">Cholesterol</div>
                <div className="col-6 text-end">
                  {calc(meal.nutritionTotals.cholesterol)} g
                </div>
              </div>
              <div className="row justifiy-content-between">
                <div className="col-6">Sodium</div>
                <div className="col-6 text-end">
                  {calc(meal.nutritionTotals.sodium)} g
                </div>
              </div>
              <div className="row justifiy-content-between">
                <div className="col-6">Potassium</div>
                <div className="col-6 text-end">
                  {calc(meal.nutritionTotals.potassium)} g
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-main fs-3 w-100">Track</button>
      </div>
    </form>
  );
};

export default MealDetails;
