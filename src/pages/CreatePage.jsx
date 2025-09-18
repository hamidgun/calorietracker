import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import CreateFoodForm from "../components/CreateFoodForm";
import CreateMealForm from "../components/CreateMealForm";
import { useState } from "react";

const CreatePage = ({ foods, setFoods, meals, setMeals, onDeleteFood }) => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const handleSaveFoods = (newFood) => {
    setFoods((prev) => [...prev, newFood]);
  };

  const handleSaveMeals = (newMeal) => {
    setMeals((prev) => [...prev, newMeal]);
  };

  return (
    <>
      <div className="container mt-4">
        {type === "meal" && (
          <CreateMealForm
            onSaveMeals={handleSaveMeals}
            meals={meals}
            foods={foods}
            onDeleteFood={onDeleteFood}
          />
        )}
        {type === "food" && (
          <CreateFoodForm onSaveFoods={handleSaveFoods} foods={foods} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default CreatePage;
