import React from 'react'
import NavBar from '../Components/NavBar'
import Caategory from '../Components/Caategory'
import FoodItem from '../Components/FoodItem'
import Cart from '../Components/Cart'

function Home() {
  return (
    <>
   <NavBar />
   <Caategory />
   <FoodItem />
   <Cart />
    </>
  )
}

export default Home
