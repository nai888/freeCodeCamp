import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const Footer = (props) => {
  const getCopyrightYear = () => {
    const initYear = 2017
    const d = new Date()
    const y = d.getFullYear()
    return y > initYear ? `${initYear}–${y}` : initYear.toString()
  }

  const author = 'Ian A. Cook'
  const authorURL = 'https://www.freecodecamp.com/nai888'
  const appGhURL = 'https://github.com/nai888/freeCodeCamp/tree/master/26-Voting-App'

  return (
    <footer>
      <div className={props.classes.footer}>
        <p className={props.classes.copyright}>
          Built by
          {' '}
          <a
            href={authorURL}
            target='_blank'
            rel='noopener noreferrer'
          >
            {author}
          </a>
          , copyright &copy;
          {' '}
          {getCopyrightYear()} under the
          {' '}
          <a
            href='https://choosealicense.com/licenses/agpl-3.0/'
            target='_blank'
            rel='noopener noreferrer'
          >
            AGPL-3.0 license
          </a>
          .
          {' '}
          <a
            href={appGhURL}
            target='_blank'
            rel='noopener noreferrer'
          >
            View this project on GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default injectSheet(styles)(Footer)
