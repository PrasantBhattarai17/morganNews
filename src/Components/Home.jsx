import React from 'react'
import useNewsFetch from '../Hooks/useNewsFetch'
import MainCard from './MainCard';
import Cardbar from './Cardbar';
import Sidebar from './Sidebar';

const Home = () => {
  const data=useNewsFetch("tech");
  console.log(data);

  return (
    <div className='text-2xl font-bold w-full h-[50rem] flex '>
      <Sidebar/>
      <div className='text-xl font semibold w-[90%] rounded h-full bg-[#f6f8fa]'>
    <Cardbar/>
    <MainCard/>
      </div>
    </div>
  )
}

export default Home