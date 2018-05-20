import * as v from '../../styles/variables'

const styles = {
  nav: {
    display: 'flex',
    alignContent: 'baseline',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  menu: {
    margin: 0,
    padding: 0
  },
  greeting: {
    fontStyle: 'italic'
  },
  menuLink: {
    display: 'inline',
    listStyle: 'none',
    margin: {
      top: 0,
      right: '0.7rem',
      bottom: 0,
      left: '0.7rem'
    },
    textAlign: 'right',
    '& a, & a:link, & a:visited, & a:hover, & a:active': {
      textDecoration: 'none'
    }
  },
  active: {
    '&:link, &:visited, &:hover, &:active': {
      color: v.ylw.string()
    }
  },
  disabled: {
    color: v.black.alpha(0.35).string()
  }
}

export default styles
