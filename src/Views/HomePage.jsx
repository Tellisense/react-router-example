import React from 'react'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
  const history = useHistory()

  const handleClick = () => {
    // history.push("/products")
    history.replace("/products")
  }



  return (
    <div>
      <h1 className="text-4xl font-black ">Home Page</h1>
      <button className="my-4 g-white hover:bg-gray-100 text-red-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleClick}>Goto products page</button>
    </div>
  )
}

export default HomePage
