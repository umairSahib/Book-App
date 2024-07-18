import React from "react";
import Cards from "../component/Cards";

const Home = ({ books }) => {
  return (
    <div>
      <Cards books={books} />
    </div>
  );
};

export default Home;
