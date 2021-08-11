import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'
import Classes from './ErrorModal.module.css'

const BackDrop = (props) => {
  return <div className={Classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = (props) => {
  return (
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
  )
}

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById('overlay-root'),
      )}
    </Fragment>
  )
}

export default ErrorModal
