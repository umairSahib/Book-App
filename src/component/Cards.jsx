import React from "react";

const Cards = ({ books }) => {
  return (
    <>
      <h1 className="font-semibold text-xl text-[#FFFFFF] pl-8 bg-black ">
        Favourites
      </h1>
      <div className="grid grid-cols-3 ">
        {books?.docs?.map((book, index) => {
          console.log("🚀 ~ {books?.docs?.map ~ book:", book, "book");

          return (
            <div className=" items-center grid " key={index}>
              <div className="bg-white rounded-lg border p-4">
                <div className="text">
                  <img
                    src={`https://covers.openlibrary.org/b/isbn/${book.isbn[1]}.jpg`}
                    alt="card "
                    className="w-full h-48 rounded-md object-cover"
                  />

                  <h2 className="text-[#000000] pt-4 pl-5 font-semibold text-lg">
                    {book.title}
                  </h2>
                  <h3 className="text-[#cf8383] pt-2 pl-5 font-semibold text-sm">
                    {book.author_name[0]}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;

// <div className=" flex-items-center grid " key={index}>
// <div className="bg-white rounded-lg border p-4">
//   <img
//     src={object.img}
//     alt="/"
//     className="w-full h-48 rounded-md object-cover"
//   />
//   <div className="px-1 py-4">
//     <div className="font-bold text-xl mb-2">{object.name}</div>

//     <p className="text-gray-700 text-base">A very Healthy & Fresh</p>
//     <p className="font-bold text-xl mb-2">{object.price}</p>
//   </div>
//   <div className="px-1 py-4">
//     <div className="inline-flex">
//       <button
//         onClick={() => props.increment(object, index)}
//         className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
//       >
//         +
//       </button>
//       <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
//         {object.quantity}
//       </button>
//       <button
//         disabled={object.quantity === 0 ? true : false}
//         onClick={() => props.decrement(object, index)}
//         className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
//       >
//         -
//       </button>
//     </div>
//     <div className="btn">
//       <button
//         onClick={() => props.addToCart(object)}
//         className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r my-2 justify-center"
//       >
//         Add To Cart
//       </button>
//     </div>
//   </div>
// </div>
// </div>
