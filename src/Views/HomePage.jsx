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
      <h2>Home Page</h2>
      <button onClick={handleClick}>Goto products page</button>
    </div>
  )
}

export default HomePage
