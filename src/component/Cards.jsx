import React from "react";

const Cards = ({ books }) => {
  return (
    <>
      {books?.docs?.map((book, index) => {
        <div key={index} className="bg-black pl-8 pr-8">
          <h1 className="font-semibold text-xl text-[#FFFFFF]">Favourites</h1>
          <div className="flex mt-4 gap-8">
            <div className="text">
              <div className="relative w-full">
                <img src="images/card1.png" alt="card" className="w-full" />
                <div className="absolute top-2 right-2 m-2">
                  <i className="fa-solid fa-heart text-[#6100C2] bg-[#CFC7CA] p-4 rounded-xl  flex items-center justify-center"></i>
                </div>
                <div className="absolute bottom-0 bg-[#C0D4DE] rounded-bl-xl rounded-br-xl w-full h-20">
                  <h2 className="text-[#000000] pt-4 pl-5 font-semibold text-lg">
                    {book.title}
                  </h2>
                  <h3 className="text-[#000000] pl-5 font-medium font-poppins text-sm">
                    2022 | Action comedy
                  </h3>
                </div>
              </div>
            </div>
            <div className="text">
              <div className="relative w-full">
                <img src="images/card2.png" alt="card" />
                <div className="absolute top-2 right-2 m-2">
                  <i className="fa-solid fa-heart text-[#6100C2] bg-[#CFC7CA] p-4 rounded-xl  flex items-center justify-center"></i>
                </div>
                <div className="absolute bottom-0 bg-[#C0D4DE] rounded-bl-xl rounded-br-xl w-full h-20">
                  <h2 className="text-[#000000] pt-4 pl-5 font-semibold text-lg">
                    House of Gucci
                  </h2>
                  <h3 className="text-[#000000] pl-5 font-medium font-poppins text-sm">
                    2022 | Drama
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>;
      })}
    </>
  );
};

export default Cards;
