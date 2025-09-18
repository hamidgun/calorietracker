function FoodCard({ food, onDeleteFood, deletable = true, amount }) {
  if (!amount) {
    amount = food.amount || 100;
  }
  return (
    <div className="card shadow rounded border-0 p-3 mt-3 position-relative food-card">
      <h5 className="card-title">{food.name}</h5>
      <p className="card-text">{food.calories} kcal</p>
      <p className="card-text text-muted pt-1">{amount}g</p>
      {deletable && (
        <span className="position-absolute top-0 end-0 m-3 text-danger fs-5 delete-icon">
          <i
            className="bi bi-x"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onDeleteFood) {
                onDeleteFood(food.id);
              }
              return false;
            }}
          ></i>
        </span>
      )}
    </div>
  );
}
export default FoodCard;
