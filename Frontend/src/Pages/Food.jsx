import React from "react";
import { Link } from "react-router-dom";
import NGOsData from "./data.json";

const Food = () => {
  const booksNGOs = NGOsData.filter((ngo) => ngo.category.includes("Food"));

  return (
    <div className="text-white text-center">
      <h1 className="text-3xl font-bold pt-5 mt-6">
        NGOs currently accepting Food near you are:
      </h1>
      <div className="grid grid-cols-4 gap-12 mt-12 ml-12 mr-12 ">
        {booksNGOs.map((ngo, index) => (
          <div key={index} className="relative">
            <div
              className="bg-gray-200 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${ngo.images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <h2 className="text-xl font-semibold text-black">{ngo.name}</h2>
                <p className="text-gray-800">{ngo.address}</p>
                <Link to={`/Ngo/${ngo.id}`}>
                  <button className="bg-black text-white px-4 py-2 rounded-md mt-2">
                    Go
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
