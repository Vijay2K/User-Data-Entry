import React, { useState, Fragment } from 'react'
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
    <Fragment>
      <AddUser onAddUsers={addUsersList} />
      <UserList users={usersList} />
    </Fragment>
  )
}

export default App
