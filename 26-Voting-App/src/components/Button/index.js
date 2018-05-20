import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import styles from './styles'

const Button = (props) => (
  <button
    className={classNames(
      props.classes.button,
      props.classes[props.buttonType]
    )}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

export default injectSheet(styles)(Button)
