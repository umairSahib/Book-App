// import React from "react";

// const Books = () => {
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const inputValue = formData.get("inputName");
//     const response = await fetch(
//       `https://openlibrary.org/search.json?q=${inputValue}`
//     );

//     const data = await response.json();
//     console.log("🚀 ~ handleSubmit ~ data:", data, "myData");
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search"
//           name="inputName"
//           className="input input-bordered w-24 md:w-auto"
//         />
//         <button type="submit">
//           <i className="fa-solid fa-magnifying-glass  ml-2"></i>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Books;

{
  /* <div className=" flex items-center justify-center">
  <div className="container mx-auto  m-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
    {props.grocery.map((object, index) => {
      return (
        <div className=" flex-items-center grid " key={index}>
          <div className="bg-white rounded-lg border p-4">
            <img
              src={object.img}
              alt="/"
              className="w-full h-48 rounded-md object-cover"
            />
            <div className="px-1 py-4">
              <div className="font-bold text-xl mb-2">{object.name}</div>

              <p className="text-gray-700 text-base">A very Healthy & Fresh</p>
              <p className="font-bold text-xl mb-2">{object.price}</p>
            </div>
            <div className="px-1 py-4">
              <div className="inline-flex">
                <button
                  onClick={() => props.increment(object, index)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                  +
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                  {object.quantity}
                </button>
                <button
                  disabled={object.quantity === 0 ? true : false}
                  onClick={() => props.decrement(object, index)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                  -
                </button>
              </div>
              <div className="btn">
                <button
                  onClick={() => props.addToCart(object)}
                  className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r my-2 justify-center"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>; */
}
