export default {
  headerArea: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: 'auto',
    left: 0,
    paddingTop: '20px',
    transitionDuration: '500ms, 500ms',
    zIndex: 1030
  },
  sticky: {
    backgroundColor: 'black',
    paddingTop: 0,
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)'
  },
  container: {
    marginTop: 0
  },
  navBar: {
    boxShadow: 'none',
    borderBottom: '1px solid white',
    transitionDuration: '500ms'
  },
  navBarBrand: {
    color: 'white',
    '&:hover': {
      color: 'white'
    }
  },
  navBarScroll: {
    border: 'none'
  },
  collapsed: {
    '@media (max-width: 767px)': {
      backgroundColor: 'black',
      borderRadius: '2px',
      borderTop: '1px solid white'
    }
  },
  navLink: {
    '& > div': {
      background: 'transparent'
    }
  },
  black: {
    backgroundColor: 'black',
    borderColor: 'black'
  }
};
