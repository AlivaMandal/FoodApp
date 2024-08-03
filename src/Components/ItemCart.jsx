import React from 'react'
import { decrementquantity, incrementquantity, removeFromCart } from '../redux/slices/CartSlices'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
const ItemCart = ({id, name, quantity, price, img}) => {

  const dispatch = useDispatch()


  return (
    <div className=' flex gap-2 shadow-md rounded-lg p-2 mb-3'>
        <button onClick={() => {
          dispatch(removeFromCart({id, img, name, price, quantity}))
          toast(`${name} is Removed from Cart!!`, {
            icon: '👋',
          });
      }}
        className=' absolute right-7 text-sm text-red-500 cursor-pointer p-1 gap-1 mb-5 hover:text-violet-600'>x</button>

      <img src={img} alt="food" className=' w-[70px] h-[50px] '/>
      <div className=' leading-5'>
        <h2 className=' font-bold text-gray-800'>{name}</h2>
        <div className=' flex justify-center'>
            <span className=' text-green-700 font-semibold'> {price}</span>
            <div className=' flex justify-center items-center gap-2 absolute right-7'>
            
            <button onClick={() => 
            quantity > 1 ? dispatch(decrementquantity({id})) : (quantity = 0)} 
            className=' border-gray-600 text-gray-900
             hover:bg-green-500 hover:border-none rounded-md text-sm transition-all border-2 p-1 
              ease-linear cursor-pointer'> - </button>

              <span>{quantity}</span>
             
              <button onClick={() => 
              quantity >= 1 ? dispatch(incrementquantity({id})) : (quantity  = 0)} 
              className=' border-gray-600 text-gray-900
             hover:bg-green-500 hover:border-none rounded-md text-xs transition-all border-2 p-1 
              ease-linear cursor-pointer'> + </button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCart
