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
    color: '#ffffff',
    fontSize: '22px',
    minWidth: '250px',
    textDecoration: 'none',
    margin: '10px',
    padding: '10px',
    cursor: 'pointer',
    background: 'rgb(139, 195, 74)',
    textTransform: 'uppercase',
    fontWeight: '600',
    textAlign: 'center',
    border: 'solid 1px rgb(139, 195, 74)',
    transition: '0.5s all',
    '&:hover': {
      background: 'rgba(139, 195, 74, 0.8)',
      borderColor: 'rgba(139, 195, 74, 0.8)',
      color: '#ffffff',
      outline: 0
    },
    '&:focus': {
      outline: 0
    }
  }
};
