import React, { useEffect, useState } from "react";
import useNews from "../Hooks/useNews";
import useError from "../Hooks/useError";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { BiSearch } from "react-icons/bi";
import NewsCard from "../Components/NewsCard";

const Home = () => {
  const { isLoading, error } = useNews();
  useError(error.isError, error.message);

  const category = useSelector((store) => store.ui.selectedItem);
  const newsData = useSelector((store) => store.news[category.toLowerCase()]);

  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log("category", category, "data", newsData);
  useEffect(() => {
    setFilteredData(newsData || []);
  }, [newsData, category]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text.length === 0) return setFilteredData(newsData);
    const filtered = filteredData.filter((news) =>
      news.title?.toLowerCase().includes(text?.toLowerCase())
    );

    setFilteredData(filtered);
  };

  console.log("filteredData", filteredData);
  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <ClipLoader size={100} />
      </div>
    );

  return (
    <div className="p-10 w-full h-full">
      <p className="text-4xl font-bold font-mono text-center text-gray-700">
        All the News you want is at one stop now. Enjoy being enlightened!
      </p>

      <div className="mt-5">
        {/* Search Bar */}
        <div className="w-1/2 mx-auto flex justify-center items-center gap-2 relative">
          <input
            className="w-full rounded-lg bg-white px-6 py-4 relative"
            type="text"
            placeholder="Search for news"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <BiSearch className="text-4xl absolute right-3 top-3 cursor-pointer" />
        </div>

        {/* News Cards */}
        {filteredData?.length > 0 ? (
          <div className="flex gap-5 flex-wrap justify-center mt-10">
            {filteredData?.map((news, idx) => (
              <NewsCard news={news} key={idx} />
            ))}
          </div>
        ) : (
          <div className="min-h-[50vh] w-full flex justify-center items-center">
            <p className="text-4xl font-bold">SORRY! NOT FOUND</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
