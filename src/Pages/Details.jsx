
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {title} = useParams();
    const category = useSelector((store)=>store.ui.selectedItem);
    const newsData = useSelector((store)=>store.news[category.toLowerCase()]);
     
    const detailedNews = newsData.find(news=>news.title.toLowerCase()===title.toLowerCase());

    console.log(detailedNews);

  return (
    <div className=' h-screen flex justify-center items-center'>
        <div className='min-w-[70vw] max-w-[80vw] h-[90vh] bg-white rounded-xl shadow-md shadow-black/20 px-[5%] py-4 flex gap-3'>
              <div className='font-bold text-sm text-gray-700 flex flex-col gap-2'>
                <p className='text-center text-5xl font-bold'>{detailedNews.title}</p>
                <p className='font-bold text-sm text-gray-700'>author:{detailedNews.author}</p>
                <p>published:{detailedNews?.publishedAt?.split("T")[0]}</p>
              <img className='max-h-[55%] rounded-md' src={detailedNews?.urlToImage}/>
              <p>{detailedNews.description}</p>
              <p>{detailedNews.content}</p>
             <a href={detailedNews.url} target='_blank'>
              <p className='text-blue-600 text-end'>View more...</p>
             </a>
              </div>
        </div>
    </div>
  )
}

export default Details;
