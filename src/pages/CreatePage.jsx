import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import CreateFoodForm from "../components/CreateFoodForm";
import CreateMealForm from "../components/CreateMealForm";
import { useState } from "react";

const CreatePage = ({ foods, setFoods }) => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const handleSaveFoods = (newFood) => {
    setFoods((prev) => [...prev, newFood]);
  };

  return (
    <>
      <div className="container mt-4">
        {type === "meal" && <CreateMealForm />}
        {type === "food" && (
          <CreateFoodForm onSaveFoods={handleSaveFoods} foods={foods} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default CreatePage;
