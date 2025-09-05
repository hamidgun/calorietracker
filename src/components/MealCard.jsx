const MealCard = ({ meals }) => {
  <div className="card shadow rounded border-0 p-3 mt-4 mb-4 position relative">
    <h5 className="card-title">{meals.name}</h5>
    <p className="card-text">{meals.calories} kcal</p>
    <p className="card-text text-muted pt-1">{meals.serving}</p>
    <span className="position-absolute top-0 end-0 m-3 text-danger fs-5">
      <i className="bi bi-heart-fill"></i>
    </span>
  </div>;
};

export default MealCard;
