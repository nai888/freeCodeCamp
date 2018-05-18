import * as v from '../../styles/variables'

const styles = {
  nav: {
    '& a': {
      textDecoration: 'none',
      '&.active': {
        color: v.ylw.string()
      }
    }
  },
  menu: {
    margin: 0,
    '& li': {
      display: 'inline',
      listStyle: 'none',
      margin: {
        top: 0,
        right: '0.7rem',
        bottom: 0,
        left: '0.7rem'
      },
      textAlign: 'right'
    }
  },
  disabled: {
    color: v.black.alpha(0.35).string()
  }
}

export default styles
