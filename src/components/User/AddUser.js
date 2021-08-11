import React, { useState, useRef } from 'react'
import Card from '../UI/Card'
import AdduserClass from './Adduser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const adduserHandler = (event) => {
    event.preventDefault()

    const user_name = nameInputRef.current.value
    const user_age = ageInputRef.current.value

    if (!user_name || !user_age) {
      console.log('Please Enter the name and age')
      setError({
        title: 'Invalid Input',
        message: 'Please enter the valid name and age',
      })
      return
    }

    if (+user_age < 1) {
      console.log('Invalid Age')
      setError({
        title: 'Invalid Age',
        message: 'Please enter the valid age (age > 0)',
      })
      return
    }

    const userData = {
      id: Math.floor(Math.random() * 1000),
      userName: user_name,
      age: user_age,
    }

    console.log(userData)
    props.onAddUsers(userData)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
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
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser
