import React from "react";

const Books = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputValue = formData.get("inputName");
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${inputValue}`
    );

    const data = await response.json();
    console.log("🚀 ~ handleSubmit ~ data:", data, "myData");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          name="inputName"
          className="input input-bordered w-24 md:w-auto"
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass  ml-2"></i>
        </button>
      </form>
    </div>
  );
};

export default Books;
