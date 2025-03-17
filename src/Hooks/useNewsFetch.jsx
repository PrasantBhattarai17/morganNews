import React, { useEffect, useState } from 'react'
import { news_api } from '../Utils/constants';

const useNewsFetch = (category) => {
    const [data,setData]=useState(null);
const GetNews=async(category)=>{
    const res=await fetch(news_api+category);
    const json=await res.json();
    setData(json);
}

 useEffect(()=>{
GetNews(category);
 },[category])


 return data;
};

export default useNewsFetch;