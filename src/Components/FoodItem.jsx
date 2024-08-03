import React from 'react'
import FoodCard from './FoodCard'
import Food from '../Foods/Food'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItem = () => {

  const category = useSelector((state) => state.category.category)
  const search = useSelector((state) => state.search.search)

  const handleToast = (name) => toast.success(` Added ${name} to cart ` )
  
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
    />
    <div className=' flex flex-wrap gap-10  justify-center lg:justify-start mx-5 my-10'>
        {
          Food.filter((food) => {
            if(category === "All" )
              return food.name.toLowerCase().includes(search.toLowerCase());
            else {
            return (
              category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
            )
            }
          }).map((food) => {
            return (
            <FoodCard key={food.id} 
            id={food.id} 
            img={food.img}
            name={food.name}
            price={food.price}
            handleToast ={handleToast}
            />
            )
          })
        }

      
    </div>
    </>
  )
}

export default FoodItem
