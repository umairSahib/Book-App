import React, { useState } from "react";

import Navbar from "./component/Navbar";
import Cards from "./component/Cards";

const App = () => {
  const [books, setBooks] = useState([]);
  console.log("🚀 ~ App ~ books:", books);

  return (
    <>
      <Navbar books={books} setBooks={setBooks} />
      <Cards books={books} />
    </>
  );
};

export default App;
