import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="container mx-auto pt-12 h-screen">
      {children}
    </div>
  )
}

export default Container
