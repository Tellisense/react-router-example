import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="header" className="w-full z-30 top-10 py-1 bg-white shadow-lg ">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">

        <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-red-700 pt-4 md:pt-0">
              <li> <Link className="inline-block no-underline hover:text-black font-medium text-lg py-1 px-4 lg:-ml-2" to='/'>Home</Link></li>
              <li>  <Link className="inline-block no-underline hover:text-black font-medium text-lg py-1 px-4 lg:-ml-2" to='/products'>Products</Link></li>
              <li>  <Link className="inline-block no-underline hover:text-black font-medium text-lg py-1 px-4 lg:-ml-2" to='/posts/2018/06'>Posts</Link></li>
              <li> <Link className="inline-block no-underline hover:text-black font-medium text-lg py-1 px-4 lg:-ml-2" to='/admin'>Admin</Link></li>
            </ul>
          </nav>
        </div>

        <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
          <div className="auth flex items-center w-full md:w-full">
            <button className="bg-transparent text-gray-800  px-2 py-1 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
            <button className="bg-red-700 text-gray-200  px-2 py-1 rounded  hover:bg-red-400 hover:text-gray-100">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
