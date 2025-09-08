const FoodDetailsForm = ({ food, amount, setAmount }) => {
  const calc = (value) => {
    if (!value) return "0";
    return ((value * amount) / 100).toFixed(1);
  };
  return (
    <form>
      <div className="p-4 rounded shadow-sm mb-5">
        <h3 className="mb-4">{food.name}</h3>
        <div className="row mb-4">
          <div className="col-2">
            <input
              type="number"
              className="form-control amount-box"
              id="food-amount"
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
              placeholder="Grams"
              required
            >
              <option value="grams">Grams</option>
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
              <i className="bi bi-fire text-danger"></i> {calc(food.calories)}{" "}
              Kcal
            </p>
          </div>
        </div>
      </div>
      <div className="nutri-info shadow-sm">
        <div className="card border-0">
          <div className="card-header fs-3 ">Nutritional Information</div>
          <div className="card-body">
            <div className="row justify-content-between">
              <div className="col-6">
                <i className="bi bi-fire text-danger"></i> Calories
              </div>
              <div className="col-6 text-end">{calc(food.calories)} kcal</div>
            </div>
            <hr />
            <div className="carbs-group">
              <div className="row justify-content-between">
                <div className="col-6">
                  <i className="bi bi-c-circle-fill text-warning"></i> Carbs
                </div>
                <div className="col-6 text-end">{calc(food.carbs)} g</div>
              </div>
              <div className="row justify-content-between">
                <div className="col-6">Fiber</div>
                <div className="col-6 text-end">{calc(food.fiber)} g</div>
              </div>
              <div className="row justify-content-between">
                <div className="col-6">Sugar</div>
                <div className="col-6 text-end">{calc(food.sugar)} g</div>
              </div>
            </div>
            <hr />
            <div className="protein-group">
              <div className="row justifiy-content-between">
                <div className="col-6">
                  <i className="bi bi-p-circle-fill text-success"></i> Protein
                </div>
                <div className="col-6 text-end">{calc(food.protein)} g</div>
              </div>
            </div>
            <hr />
            <div className="fat-group">
              <div className="row justifiy-content-between">
                <div className="col-6">
                  <i className="bi bi-circle-fill text-info"></i> Fat
                </div>
                <div className="col-6 text-end">{calc(food.fat)} g</div>
              </div>
              <div className="row justifiy-content-between">
                <div className="col-6">Saturated Fat</div>
                <div className="col-6 text-end">
                  {calc(food.saturatedFat)} g
                </div>
              </div>
              <div className="row justifiy-content-between">
                <div className="col-6">Unsaturated</div>
                <div className="col-6 text-end">
                  {calc(food.unsaturatedFat)} g
                </div>
              </div>
            </div>
            <hr />
            <div className="others-group">
              <div className="row justifiy-content-between">
                <div className="col-6">Cholesterol</div>
                <div className="col-6 text-end">{calc(food.cholesterol)} g</div>
              </div>
              <div className="row justifiy-content-between">
                <div className="col-6">Sodium</div>
                <div className="col-6 text-end">{calc(food.sodium)} g</div>
              </div>
              <div className="row justifiy-content-between">
                <div className="col-6">Potassium</div>
                <div className="col-6 text-end">{calc(food.potassium)} g</div>
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

export default FoodDetailsForm;
