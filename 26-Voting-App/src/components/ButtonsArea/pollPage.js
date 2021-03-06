import React from 'react'
import injectSheet from 'react-jss'
import { withRouter } from 'react-router'

import Button from '../Button'

import styles from './styles'

const ButtonsArea = (props) => {
  const onVote = (e) => {
    e.preventDefault()
    props.voting()
    onResults()
  }

  const onResults = (e) => {
    if (e) e.preventDefault()
    props.history.push(`/results/${props.match.params.id}`)
  }

  const onBackToPoll = (e) => {
    e.preventDefault()
    props.history.push(`/polls/${props.match.params.id}`)
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
    if (props.editing) {
      return (
        <div className={props.classes.buttons}>
          <Button buttonType='success' onClick={props.onSaveEdit}>
            Save
          </Button>
          <Button buttonType='danger' onClick={props.onCancelEdit}>
            Cancel
          </Button>
        </div>
      )
    } else if (props.owned) {
      if (props.confirmDelete) {
        return (
          <div className={props.classes.buttons}>
            <p className={props.classes.confirmation}>
              Are you sure you want to delete this poll?
            </p>
            <Button buttonType='danger' onClick={onConfirmDelete}>
              Delete Poll
            </Button>
            <Button buttonType='primary' onClick={onCancelDelete}>
              Cancel
            </Button>
          </div>
        )
      } else if (props.page === 'poll') {
        return (
          <div className={props.classes.buttons}>
            <Button buttonType='success' onClick={onVote}>
              Vote
            </Button>
            <Button buttonType='warning' onClick={onDelete}>
              Delete Poll
            </Button>
            <Button buttonType='primary' onClick={onResults}>
              View Results
            </Button>
          </div>
        )
      } else if (props.page === 'results') {
        return (
          <div className={props.classes.buttons}>
            <Button buttonType='primary' onClick={onBackToPoll}>
              Back to Poll
            </Button>
            <Button buttonType='warning' onClick={onDelete}>
              Delete Poll
            </Button>
          </div>
        )
      } else {
        return null
      }
    } else {
      if (props.page === 'poll') {
        return (
          <div className={props.classes.buttons}>
            <Button buttonType='success' onClick={onVote}>
              Vote
            </Button>
            <Button buttonType='primary' onClick={onResults}>
              View Results
            </Button>
          </div>
        )
      } else if (props.page === 'results') {
        return (
          <div className={props.classes.buttons}>
            <Button buttonType='primary' onClick={onBackToPoll}>
              Back to Poll
            </Button>
          </div>
        )
      } else {
        return null
      }
    }
  }

  return renderButtons()
}

export default withRouter(injectSheet(styles)(ButtonsArea))
