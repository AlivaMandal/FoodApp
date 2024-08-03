import React from 'react'
import { useDispatch } from "react-redux"
import { addToCart } from '../redux/slices/CartSlices'

const FoodCard = ({id, img, name, price, handleToast }) => {
  const dispatch = useDispatch()
  return (
    <div className=' font-bold w-[250px] p-5 bg-white flex-col gap-2 rounded-lg'>
      <img src={img} alt="" 
      className=' w-auto h-[130px] hover:scale-110 cursor-grab overflow-hidden
       transition-all duration-500 ease-in-out'
      />
      <div className=' text-sm flex justify-between '>
       <h2 className=' m--5'>{name}</h2>
       <span>{price}</span>
       </div>
       <div className=' flex justify-between mt-2'>
        <button 
        onClick={() => {
          dispatch(addToCart({ id, name, price, img,  quantity: 1 }))
          handleToast(name)
        }}
        className=' p-1 text-white bg-green-400 hover:bg-green-700 rounded-lg text-sm'>Add to cart</button>
      </div>
    </div>
  
  )
}

export default FoodCard
