import React from 'react'
import Card from './Card'
import Button from './Button'
import Classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    <div>
      <div className={Classes.backdrop} onClick={props.onClose} />
      <Card className={Classes.modal}>
        <header className={Classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={Classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={Classes.actions}>
          <Button onClick={props.onClose}>Close</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal
