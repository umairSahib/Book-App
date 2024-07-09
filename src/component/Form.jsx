import React from "react";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const inputValue = formData.get("inputName");

    console.log(inputValue);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="inputName" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Form;
