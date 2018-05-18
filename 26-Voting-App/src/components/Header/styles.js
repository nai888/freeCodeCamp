import * as v from '../../styles/variables'

const styles = {
  header: {
    margin: {
      top: '0.7rem',
      right: 0,
      bottom: '0.7rem',
      left: 0
    },
    padding: {
      top: '0.5rem',
      right: 0,
      bottom: '1rem',
      left: 0
    },
    display: 'flex',
    alignContent: 'baseline',
    justifyContent: 'space-between',
    borderBottom: {
      width: 1,
      style: 'solid',
      color: v.blu.alpha(0.2).string()
    }
  },
  title: {
    margin: 0
  },
  titleLink: {
    '&:link, &:visited, &:hover, &:active': {
      color: 'inherit',
      textDecoration: 'none'
    }
  }
}

export default styles
