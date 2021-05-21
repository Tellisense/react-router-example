import React, { createContext, useContext, useState } from 'react'


const ThemeContext = createContext()


export const useTheme = () => {
  return useContext(ThemeContext)
}

const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false)


  console.log(`darkMode:  `, darkMode)

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {props?.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
