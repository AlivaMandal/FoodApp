import React, { useEffect, useState } from 'react'
import Food from '../Foods/Food'
import {useDispatch, useSelector } from "react-redux";
import { setCategory } from '../redux/slices/CategorySlice';

const Caategory = () => {
  
  const [categories, setCategories] = useState([])

  const listUniqueCategory = () => {
    const uniqueCategory = [
      ... new Set(Food.map((food) => food.category))]
    setCategories(uniqueCategory)
    //console.log(uniqueCategory)
  }

  useEffect(() =>{
    listUniqueCategory()
  }, [])

const dispatch = useDispatch();

const selectedcategory = useSelector((state) => state.category.category);  //store=1.cat, catSlice=2.cat

  return (
    <div className=' ml-6'>
      <h3 className=' text-xl text-teal-800 mb-3 font-bold'>Find your neccessaries</h3>
      <div className=' gap-2 my-1 overflow-x-scroll flex scroll-smooth lg:overflow-x-hidden'>
      <button 
                onClick={() => dispatch(setCategory("All"))}
                className={` px-3 py-2 bg-gray-200 font-bold rounded-lg
                hover:bg-sky-400 hover:text-white cursor-auto 
                ${selectedcategory === "All" && " bg-sky-400 text-white"}  `}> All</button>
          
           {categories.map((category,ind) =>{
              return (
                <button 
                onClick={() => dispatch(setCategory(category))}
                key={ind} 
                className={` px-3 py-2 bg-gray-200 font-bold rounded-lg
                hover:bg-sky-400 hover:text-white cursor-auto 
                 ${selectedcategory === category && " bg-sky-400 text-white"} 
                 `}> {category}</button>
              )
            })
          }
                  </div>
                </div>
          
  )
}

export default Caategory
