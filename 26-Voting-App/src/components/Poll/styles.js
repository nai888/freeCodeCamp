const styles = {
  owner: {
    fontStyle: 'italic',
    opacity: 0.7
  },
  buttons: {
    marginTop: '1rem',
    marginBottom: '1rem',
    '& button': {
      marginLeft: '1rem',
      marginRight: '1rem',
      '&:first-child': {
        marginLeft: 0
      },
      '&:last-child': {
        marginRight: 0
      }
    }
  },
  confirmation: {
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
}

export default styles
