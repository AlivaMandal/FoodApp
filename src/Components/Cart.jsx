import React, { useState } from 'react'
import ItemCart from './ItemCart'
import {useSelector} from 'react-redux'
const Cart = () => {
  const [activeCart, setActiveCart] = useState(false)

  const cardItems = useSelector((state => state.cart.cart))
  const totalQuantity = cardItems.reduce((totalQty, item) => totalQty + item.quantity, 0)
  const totalPrice = cardItems.reduce((total, item) => total + item.quantity * item.price , 0)

  return (
   <>
   <div className={` fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full p-5 
    ${activeCart ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 z-50`}
    >Cart
    <div  className='flex justify-between items-center my-5'>
        <span className=' text-xl font-bold text-gray-700 '>
            My orders
        </span>
        <button onClick={() => setActiveCart(!activeCart)}  className=" border-2 border-gray-700
         text-gray-600 font-bold p-1 text-xl rounded-lg
          hover:text-red-600 hover:border-red-500 cursor-pointer"> close</button>
    </div>
    {
      cardItems.length > 0 ? 
      cardItems.map((food) =>{
        return <ItemCart key={food.id} 
        id={food.id} 
        name={food.name}
        price={food.price}
        img = {food.img}
        quantity={food.quantity} />
      }) :  
      <h2 className=' text-center text-xl font-bold text-gray-900'>your cart is empty</h2>
    }
    
    <div className=' absolute bottom-0' >
    <h3 className=' font-semibold text-gray-800'>Items: {totalQuantity}</h3>
    <h3 className=' font-semibold text-gray-800'>total Amount: {totalPrice}</h3>
    <hr className=' w-[90vw] lg:w-[18vw] my-2'/>
    <button className=' bg-green-500 font-bold p-2 px-3 text-white rounded-lg 
    lg:w-[15vw] py-2 w-[90vw] mb-5'>Check out</button>
   </div>
   </div>
  
   <button onClick={() => setActiveCart(!activeCart)} 
   className={` bg-blue-950 text-white rounded-full  shadow-md 
   text-lg p-3 text-bold  bottom-10 fixed right-8 hover:bg-sky-400
    hover:text-amber-50 hover:scale-150 
    ${totalQuantity > 0 && "animate-bounce duration-500 transition-all"}
    `}>Cart</button>
   </>
  )
}

export default Cart
