export default {
  paper: {
    width: '95%',
    backgroundColor: 'transparent',
    margin: 'auto',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  addFoodContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  addFood: {
    display: 'flex',
    width: '100%',
    height: '44px',
    marginBottom: '3px',
    '& > div': {
      width: 'calc(100% - 44px)'
    },
    '& > div > input': {
      width: '100%',
      lineHeight: '32px',
      fontSize: '18px',
      outline: 'none',
      textDecoration: 'none',
      border: '1px solid rgb(211, 211, 211)',
      borderRadius: '1px',
      padding: '5px'
    }
  },
  button: {
    '&:focus': {
      outline: 0
    },
    cursor: 'default',
    width: '44px',
    height: '44px',
    lineHeight: '40px',
    padding: 0,
    border: '1px solid black',
    borderRadius: '1px',
    fontSize: '28px',
    color: 'white'
  },
  addButton: {
    backgroundColor: 'rgb(139, 195, 74)',
    borderColor: 'rgb(139, 195, 74)'
  },
  removeButton: {
    backgroundColor: '#a71c45',
    borderColor: '#a71c45'
  }
};
