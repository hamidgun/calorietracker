import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import CreateFoodForm from "../components/CreateFoodForm";
import CreateMealForm from "../components/CreateMealForm";

const CreatePage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  return (
    <>
      <div className="container mt-4">
        {type === "meal" && <CreateMealForm />}
        {type === "food" && <CreateFoodForm />}
      </div>
      <Footer />
    </>
  );
};

export default CreatePage;
