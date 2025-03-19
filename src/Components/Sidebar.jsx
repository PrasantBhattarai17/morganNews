import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedItem } from '../Redux/uiSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { toggleCategory } from '../Redux/newsSlice';

const categories=["Trending","Sports","Business","Politics"];

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedItem = useSelector((store)=>store.ui.selectedItem);
  const category=useSelector((store)=>store.news.category);
  const handleSelectItems = (selectedItem)=>{
        if(location.pathname!=="/home") navigate("/home");
        dispatch(updateSelectedItem(selectedItem)); 
        dispatch(toggleCategory());
  }
 
  return (
    <div className='min-w-full text-center md:absolute fixed p-4 bg-white md:z-0 z-50'>
      <div className='flex flex-row w-full h-full justify-between'>
      <span className=' text-3xl font-mono mt-10'>Category</span>
      <span onClick={()=>dispatch(toggleCategory())} className='md:hidden text-3xl font-mono mt-10 px-4'><BiMenu /></span>
      </div>
          <div className={`mt-10 md:flex flex-col gap-10 md:z-0 z-10 font-bold text-xl ${category?"flex":"hidden"} `}>
           { categories.map((category)=>(<p className={`cursor-pointer hover:bg-gray-300 p-2 rounded-lg ${category===selectedItem?"bg-gray-300":""}`} key={category} onClick={()=>handleSelectItems(category)}>{category}</p>))}
            </div>
        
    </div>
  )
}

export default Sidebar