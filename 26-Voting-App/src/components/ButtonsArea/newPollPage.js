import React from 'react'
import injectSheet from 'react-jss'
import { withRouter } from 'react-router'

import Button from '../Button'

import styles from './styles'

const ButtonsArea = (props) => {
  const onSubmit = (e) => {
    e.preventDefault()
    props.submitting()
  }

  const onDelete = (e) => {
    e.preventDefault()
    props.deleting()
  }

  const onConfirmDelete = (e) => {
    e.preventDefault()
    props.confirmingDelete()
  }

  const onCancelDelete = (e) => {
    e.preventDefault()
    props.cancelingDelete()
  }

  const renderButtons = () => {
    if (props.confirmDelete) {
      return (
        <div className={props.classes.buttons}>
          <p className={props.classes.confirmation}>
            Are you sure you want to cancel? This poll will be lost.
          </p>
          <Button buttonType='danger' onClick={onConfirmDelete}>
            Delete Poll
          </Button>
          <Button buttonType='primary' onClick={onCancelDelete}>
            Go Back
          </Button>
        </div>
      )
    } else {
      return (
        <div className={props.classes.buttons}>
          <Button buttonType='success' onClick={onSubmit}>
            Submit Poll
          </Button>
          <Button buttonType='warning' onClick={onDelete}>
            Cancel
          </Button>
        </div>
      )
    }
  }

  return (
    <div className={props.classes.buttonsArea}>
      {renderButtons()}
    </div>
  )
}

export default withRouter(injectSheet(styles)(ButtonsArea))
