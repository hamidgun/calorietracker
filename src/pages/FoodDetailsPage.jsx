import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../css/foodDetailsPage.css";
import MacrosBar from "../components/MacrosBar";

const FoodDetailsPage = ({ foods }) => {
  const { id } = useParams();
  const food = foods.find((item) => item.id === id);

  return (
    <>
      <div className="container">
        <div className="row justify-content-between navigation mb-4">
          <div className="col-1">
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className="col-1">
            <i className="bi bi-heart"></i>
          </div>
        </div>
        <form action="" className="p-4 rounded shadow-sm mb-4">
          <h3 className="mb-4">Title</h3>
          <div className="row mb-4">
            <div className="col-2">
              <input
                type="number"
                className="form-control amount-box"
                id="amount"
                name="amount"
                placeholder="#"
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
                <i className="bi bi-fire"></i> 30 Kcal
              </p>
            </div>
          </div>
        </form>
        <div className="w-75 mx-auto">
          <MacrosBar />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FoodDetailsPage;
