import React from 'react'
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {

  return (
    <Link to={`/${news.title}`}>
    <div className='md:z-0 -z-20 w-full sm:w-80 bg-gray-100 h-auto rounded-xl shadow-md shadow-black/20 p-4 hover:bg-blue-100/60 cursor-pointer hover:-translate-y-2 transition-transform ease-in-out duration-300'>
      <img src={news.urlToImage} alt='photo' className='w-full h-auto rounded-xl'/>
      <div className='flex justify-between text-sm text-gray-500 font-bold mt-2'>
        <div>
            <p>author:</p>
            <span>{news.author}</span>
        </div>
        <div>
            <p>published:</p>
            <span>{news.publishedAt.split("T")[0]}</span>
        </div>
      </div>
      <p className='font-bold text-xl my-4 min-h-24'>{news.title}</p>
      <div className='text-sm font-bold text-gray-500 flex justify-between'>
        <div>
        <p>source:</p>
        <span>{news.source.name}</span>
        </div>
        <p className='text-blue-600 my-auto'>Details...</p>
      </div>
    </div>
    </Link>
  )
}

export default NewsCard;
