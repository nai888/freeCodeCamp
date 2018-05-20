import React from 'react'
import { withRouter } from 'react-router'

import Button from './index'

const ButtonLink = (props) => {
  const onClick = e => {
    e.preventDefault()
    props.history.push(props.route)
  }

  return (
    <Button buttonType={props.buttonType} onClick={onClick}>
      {props.children}
    </Button>
  )
}

export default withRouter(ButtonLink)
