import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedItem } from '../Redux/uiSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const categories=["Trending","Sports","Business","Politics"];

const Sidebar = () => {
  const dispatch = useDispatch();
  // to track the url cz,since side bar is not routing anywhere,(and when we click to view details teti bela route vayera arkai link ma gako huncha, ani if detailed page bata feri sidebar ma click garyo vaney, we would still be in that particular detailed page,so to overcome that, using location)
  const location = useLocation();
  const navigate = useNavigate();
  const selectedItem = useSelector((store)=>store.ui.selectedItem);
  const handleSelectItems = (selectedItem)=>{
        if(location.pathname!=="/home") navigate("/home");
        dispatch(updateSelectedItem(selectedItem)); 
  }

  return (
    <div className='min-w-full text-center p-4'>
      <span className=' text-3xl font-mono mt-10'>Category</span>
          <div className='mt-10 flex flex-col gap-10 font-bold text-xl'>
           { categories.map((category)=>(<p className={`cursor-pointer hover:bg-gray-300 p-2 rounded-lg ${category===selectedItem?"bg-gray-300":""}`} key={category} onClick={()=>handleSelectItems(category)}>{category}</p>))}
            </div>
        
    </div>
  )
}

export default Sidebar