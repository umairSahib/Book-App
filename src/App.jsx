import React, { useState } from "react";
import Home from "./pages/Home.jsx";
import Book from "./pages/Book.jsx";
import Navbar from "./component/Navbar.jsx";
import Cards from "./component/Cards.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardDetails from "./component/CardDetails.jsx";

const App = () => {
  const [books, setBooks] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home books={books} />,
    },
    {
      path: "/Book",
      element: <Book />,
    },
    {
      path: "/Cards",
      element: <Cards />,
    },
    {
      path: "Card/:CardDetails",
      element: <CardDetails />,
    },
  ]);

  return (
    <>
      <Navbar books={books} setBooks={setBooks} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
