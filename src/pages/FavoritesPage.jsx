import "../App.css";

function FavoritesPage() {
  return (
    <div className="container my-4">
      <h4 className="mb-3">Foods</h4>
      <div className="row g-3">{/* FoodCard bileşenleri */}</div>

      <hr className="my-4" />

      <h4 className="mb-3">Meals</h4>
      <div className="row g-3">{/* MealCard bileşenleri */}</div>
    </div>
  );
}

export default FavoritesPage;
