import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NEWS_URL } from "../constants";
import {
  addBusinessNews,
  addPoliticsNews,
  addSportsNews,
  addTrendingNews,
} from "../Redux/newsSlice";
import toast from "react-hot-toast";

const useNews = () => {
  const dispatch = useDispatch();
  const category = useSelector((store) => store.ui.selectedItem);
  const newsData = useSelector((store)=>store.news[category.toLowerCase()])
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  useEffect(() => {
    if(!newsData)
    getNews();
  }, [category]);

  const getNews = async () => {
    try {
      setIsLoading(true);
      console.log(NEWS_URL + category);
      const response = await fetch(NEWS_URL + category.toLowerCase());
      if (!response.ok) {
        throw new Error(
          `Sorry!!Error while Fetching! Request failed with ${response.status}`
        );
      }

      const data = await response.json();
      const payload = data?.response?.articles;
 
      switch (category.toLowerCase()) {
        case "trending":
          dispatch(addTrendingNews(payload));
          break;
        case "politics":
          console.log("from switch")
          dispatch(addPoliticsNews(payload));
          break;
        case "business":
          dispatch(addBusinessNews(payload));
          break;
        case "sports":
          dispatch(addSportsNews(payload));
          break;
        default:
          toast.error("Couldn't get News");
          break;
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError((prev) => ({ ...prev, isError: true, message: error.message }));
    }
  };

  return { isLoading, error };
};

export default useNews;
