import * as v from '../../styles/variables'

const styles = {
  footer: {
    borderTop: {
      width: 1,
      style: 'solid',
      color: v.blu.alpha(0.2).string()
    },
    margin: {
      top: 0,
      right: 'auto',
      bottom: 0,
      left: 'auto'
    },
    paddingTop: '0.5rem'
  },
  copyright: {
    '& a, & a:link, & a:visited, & a:hover, & a:active': {
      textDecoration: 'none'
    }
  }
}

export default styles
