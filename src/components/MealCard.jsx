const MealCard = ({ meal }) => {
  if (!meal) return null;

  return (
    <div className="card shadow rounded border-0 p-3 mt-4 mb-4 position relative">
      <h5 className="card-title">{meal.name}</h5>
      <p className="card-text">
        {meal.nutritionTotals?.calories?.toFixed(1) || 0} kcal
      </p>
      <p className="card-text text-muted pt-1">Serving: {meal.serving || 1}</p>
      <span className="position-absolute top-0 end-0 m-3 text-danger fs-5">
        <i className="bi bi-heart-fill"></i>
      </span>
    </div>
  );
};

export default MealCard;
