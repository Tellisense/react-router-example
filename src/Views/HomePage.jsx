import React from 'react'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
  const history = useHistory()

  const gotoProductsPush = () => {
    // history.push("/products")
    history.push("/products")
  }
  const gotoProductsReplace = () => {
    history.replace("/products")
  }
  const goBack = () => {
    history.goBack()
  }




  return (
    <div>
      <h1 className="text-4xl font-black ">Home Page</h1>
      <div>
        <button className="my-4 g-white hover:bg-gray-100 text-red-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={gotoProductsPush}>Goto products page (push)</button>

        <button className="my-4 g-white hover:bg-gray-100 text-red-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-8" onClick={gotoProductsReplace}>goto Products (replace)</button>
      </div>

      <div>
        <button className="my-4 g-white hover:bg-gray-100 text-red-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={goBack}>Go back</button>

      </div>

    </div>
  )
}

export default HomePage
