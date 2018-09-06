export default {
  listsContainer: {
    maxWidth: '560px',
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 'auto',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  list: {
    width: '50%',
    minWidth: '265px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  listTitle: {
    font: '30px arial, sans-serif',
    color: 'white',
    textAlign: 'center',
    margin: '10px 0 10px 0'
  },
  button: {
    minWidth: '265px',
    margin: '20px 20% 30px 20%',
    backgroundColor: 'rgb(71, 166, 47)',
    border: '2px solid rgb(71, 166, 47)',
    borderRadius: '10px',
    font: '26px arial, sans-serif',
    color: 'white',
    padding: '5px 0 5px 0',
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
      color: 'white'
    },
    '&:hover': {
      backgroundColor: 'white',
      color: 'rgb(71, 166, 47)'
    }
  }
};
