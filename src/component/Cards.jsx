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
            <div className="bg-black pl-4 pr-4">
              <div key={index} className="flex pt-4 gap-8">
                <div className="text">
                  <div className="relative w-full">
                    <img
                      src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}.jpg`}
                      alt="card "
                      className="w-full"
                    />
                    <div className="absolute top-2 right-2 m-2">
                      <i className="fa-solid fa-heart text-[#6100C2] bg-[#CFC7CA] p-4 rounded-xl  flex items-center justify-center"></i>
                    </div>
                    <div className="absolute bottom-0 bg-[#C0D4DE] rounded-bl-xl rounded-br-xl w-full h-20">
                      <h2 className="text-[#000000] pt-4 pl-5 font-semibold text-lg">
                        {book.title}
                      </h2>
                    </div>
                  </div>
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
