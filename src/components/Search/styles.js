export default {
  form: {
    display: 'flex',
    alignItems: 'center',
    width: '276px',
    position: 'unset',
    transitionProperty: 'margin-left',
    transitionDuration: '1s'
  },
  formOpened: {
    marginLeft: '13px'
  },
  searchBar: {
    marginLeft: 'auto',
    minWidth: '200px',
    maxWidth: '250px',
    height: '35px',
    border: '2px solid gray',
    borderRadius: '1000px',
    paddingLeft: '17px',
    paddingRight: '25px',
    transitionProperty:
      'min-width, width, height, border-radius, padding-right',
    transitionDuration: '1s, 1s, .5s, 1s, 1s',
    '&:focus': {
      outline: 0,
      borderColor: 'gray',
      boxShadow: 'none'
    }
  },
  closed: {
    cursor: 'pointer',
    padding: 0,
    minWidth: '20px',
    width: '20px',
    height: '20px',
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
  searchIconNone: {
    display: 'none'
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
