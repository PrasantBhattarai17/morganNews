import { useEffect } from "react";
import toast from "react-hot-toast/headless";

const useError = (isError, message) => {
  useEffect(() => {
    if (isError) {
      toast.error(message);
      console.log(message);
    }
  },[isError,message]);
};

export default useError;
