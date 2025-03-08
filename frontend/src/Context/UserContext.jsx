import React, { createContext } from 'react'

export const UserDataContext = createContext()

const UserContext = ({ children }) => {

  const [user, setUser] = useState({
    email: '',
    fullName: {
        firstName: '',
        lastName: ''
    }
  })

  return (
    <div>
        <UserContext.Provider>
            { children }
        </UserContext.Provider>
    </div>
  )
}

export default UserContext