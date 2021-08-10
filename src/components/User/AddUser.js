import React, { useState } from 'react'
import Card from '../UI/Card'
import AdduserClass from './Adduser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const [entereduserName, setUserName] = useState('')
  const [enteredUserAge, setUserAge] = useState('')
  const [error, setError] = useState()

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value)
  }

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value)
  }

  const adduserHandler = (event) => {
    event.preventDefault()
    if (!entereduserName || !enteredUserAge) {
      console.log('Please Enter the name and age')
      setError({
        title: 'Invalid Input',
        message: 'Please enter the valid name and age',
      })
      return
    }

    if (+enteredUserAge < 1) {
      console.log('Invalid Age')
      setError({
        title: 'Invalid Age',
        message: 'Please enter the valid age (age > 0)',
      })
      return
    }

    const userData = {
      id: Math.floor(Math.random() * 1000),
      userName: entereduserName,
      age: enteredUserAge,
    }

    console.log(userData)
    props.onAddUsers(userData)
    setUserName('')
    setUserAge('')
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card className={AdduserClass.input}>
        <form onSubmit={adduserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={entereduserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
