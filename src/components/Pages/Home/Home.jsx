import { useState } from "react";
import Header from "../../Header/Header";
import ExploreMenu from "../../Menu/Menu";
import "./Home.css";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";
<<<<<<< HEAD
import AppDownload from "../../AppDownload/AppDownload";
=======
>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
<<<<<<< HEAD
      <AppDownload />
=======
>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d
    </div>
  );
};

export default Home;
