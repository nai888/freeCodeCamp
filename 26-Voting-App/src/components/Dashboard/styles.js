import * as v from '../../styles/variables'

const styles = {
  notice: {
    fontStyle: 'italic'
  },
  questionList: {
    listStyleType: 'none',
    padding: 0
  },
  questionTitle: {
    listStyleType: 'none',
    margin: '0.7rem',
    backgroundColor: v.blu.alpha(0.05).string(),
    border: {
      width: 1,
      style: 'solid',
      color: v.blu.string(),
      radius: 5
    },
    '& a, & a:link, & a:visited, & a:hover, & a:active': {
      textDecoration: 'none',
      display: 'block',
      padding: '0.7rem'
    }
  }
}

export default styles
