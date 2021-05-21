import React, { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export const useUser = () => {
  return useContext(UserContext)
}

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState('')

  console.log(`currentUser: `, currentUser)

  const currentUserValues = React.useMemo(() => {
    return (
      { currentUser, setCurrentUser }
    )
  }, [currentUser, setCurrentUser])


  return (
    <UserContext.Provider value={currentUserValues}>
      {props?.children}
    </UserContext.Provider>
  )
}

export default UserProvider
