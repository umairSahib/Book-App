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
                    src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}.jpg`}
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
