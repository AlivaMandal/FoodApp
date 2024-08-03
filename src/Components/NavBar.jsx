import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'

const NavBar = () => {
  const dispatch = useDispatch()
  return (
    <nav className=' flex flex-col  lg:flex-row justify-between  mx-6 py-3 mb-10 '>
        <div>
            <h1 className=' text-3xl lg:text-5xl text-violet-500 font-bold '>Welcome back Foodie😊</h1>
            <h3 className=' text-sm font-bold text-blue-800 right-0'>{new Date().toUTCString().slice(0, 16)}</h3>
        </div>
        <div>
            <input type='search' 
            name='search' 
            id='' 
            placeholder='search here' 
            autoComplete='off' 
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className=' p-3 border border-gray-400 text-lg rounded-lg outline-none  w-full lg:w-[50vw]'
            />
        </div>
    </nav>
  )
}

export default NavBar
