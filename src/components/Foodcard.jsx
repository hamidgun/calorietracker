function FoodCard({ food }) {
  return (
    <div className="card shadow rounded border-0 p-3 mt-4 position relative">
      <h5 className="card-title">{food.name}</h5>
      <p className="card-text">{food.calories} kcal</p>
      <p className="card-text text-muted pt-1">100g</p>
      <span className="position-absolute top-0 end-0 m-3 text-danger fs-5">
        <i className="bi bi-heart-fill"></i>
      </span>
    </div>
  );
}
export default FoodCard;
