import React from "react";

const navbar = (props) => {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const inputValue = formData.get("inputName");

    const response = await fetch(
      `https://openlibrary.org/search.json?q=${inputValue}&fields=key,title,author_name,isbn&limit=20&page=1`
    );
    const data = await response.json();

    console.log(data);
    props.setBooks(data);
  }
  return (
    <div className="bg-black pl-8 pr-8 pt-8">
      <nav className="flex justify-between items-center ">
        <ul className="flex gap-8">
          <li className="text-base text-[#FFFFFF] font-poppins">Movies</li>
          <li className="text-base text-[#FFFFFF] font-poppins">Series</li>
          <li className="text-base text-[#FFFFFF] font-poppins">
            Documentaries
          </li>
        </ul>
        <div className="flex gap-8 items-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              name="inputName"
              className="input input-bordered w-24 md:w-auto"
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass text-[#FFFFFF] ml-2"></i>
            </button>
          </form>
          <i className="fa-regular fa-bell text-[#FFFFFF] "></i>
          <div className="flex gap-2 items-center">
            <img src="images/navimage.png" alt="navbar" />
            <h2 className="text-base text-[#FFFFFF] font-poppins">Tetiana</h2>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
