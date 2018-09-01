export default {
  form: {
    display: 'flex',
    alignItems: 'center'
  },
  searchBar: {
    width: '250px',
    height: '35px',
    border: '2px solid gray',
    borderRadius: '1000px',
    padding: '6px 25px 6px 17px',
    transitionProperty: 'width, height, border-radius, padding',
    transitionDuration: '.6s, .9s, .5s, .4s',
    '&:focus': {
      outline: 0,
      borderColor: 'gray',
      boxShadow: 'none'
    }
  },
  closed: {
    cursor: 'pointer',
    padding: '10px',
    width: '0',
    height: '0',
    borderRadius: '50%'
  },
  dNone: {
    display: 'none'
  },
  searchIcon: {
    position: 'relative',
    top: '12px',
    height: '12px',
    width: '1px',
    border: '1px solid gray',
    transform: 'rotate(-45deg)'
  },
  closeIcon: {
    color: 'gray',
    position: 'relative',
    right: '23px !important',
    bottom: '2px',
    fontWeight: 100,
    cursor: 'pointer'
  }
};
