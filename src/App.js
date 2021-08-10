import React, { useState } from 'react'
import AddUser from './components/User/AddUser'
import UserList from './components/User/UserList'

const App = () => {
  const [usersList, setUsersList] = useState([])

  const addUsersList = (users) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, users]
    })
  }

  return (
    <div>
      <AddUser onAddUsers={addUsersList} />
      <UserList users={usersList} />
    </div>
  )
}

export default App
