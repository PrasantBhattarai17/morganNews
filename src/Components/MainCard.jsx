import React, { useState } from "react";
import useNewsFetch from "../Hooks/useNewsFetch";

const Card = () => {
 const newsData=useNewsFetch("tech");
 console.log(newsData);
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-6 p-4">
        {newsData.map((currItem, index) => {
          if (!currItem.urlToImage) {
            return null;
          }

          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto sm:w-full cursor-pointer"
            >
              <img
                src={currItem.urlToImage}
                alt={currItem.title || "News Image"}
                className="w-full h-44 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold hover:text-blue-700 transition-all duration-300">
                  {currItem.title}
                </h2>

                <p className="text-gray-700 mt-2 mb-3 text-sm leading-snug">
                  {currItem.description}
                </p>

                <button className="bg-blue-600  text-white px-4 py-2 rounded-md mt-2 transition-all duration-300 hover:bg-blue-800">
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-xl h-4/6 w-full overflow-y-auto relative">
            <button
              className="top-0  absolute right-0 text-gray-700 text-4xl hover:text-red-600"
              onClick={closeModal}
            >
              &times;
            </button>

            <img
              src={selectedNews.urlToImage}
              alt={selectedNews.title}
              className="w-full text-center object-cover pr-2 rounded"
            />

            <h2 className="text-xl font-bold mt-1">{selectedNews.title}</h2>
            <p className="text-gray-700 tracking-tight mt-2">{selectedNews.description}</p>

            <a
              href={selectedNews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-zinc-100 w-36 px-1 text-center py-2 rounded bg-blue-600 hover:underline"
            >
              Read Full Article
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;