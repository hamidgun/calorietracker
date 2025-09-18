import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/components/foodMealDetails.css";
import { useState } from "react";
import FoodDetailsForm from "../components/FoodDetailsForm";

const FoodDetailsPage = ({ foods }) => {
  const { id } = useParams();
  const food = foods.find((item) => item.id === id);

  const [amount, setAmount] = useState("100");

  const navigate = useNavigate();

  return (
    <>
      <div className="container mt-2">
        <div className="row justify-content-between navigation ">
          <div className="col-1">
            <i
              className="bi bi-arrow-left"
              onClick={() => navigate("/saved?savedTab=foods")}
            ></i>
          </div>
        </div>
        <FoodDetailsForm food={food} amount={amount} setAmount={setAmount} />
      </div>

      <Footer />
    </>
  );
};

export default FoodDetailsPage;
