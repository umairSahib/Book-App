import React, { useState } from "react";
import Home from "./pages/Home.jsx";
import Book from "./pages/Book.jsx";
import Navbar from "./component/Navbar.jsx";
import BookDetail from "./pages/BookDetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      path: "/myBook/:id",
      element: <BookDetail />,
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
