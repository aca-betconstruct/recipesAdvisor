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
    padding: 0
  },
  navBarScroll: {
    border: 'none'
  },
  collapsed: {
    '@media (max-width: 767px)': {
      backgroundColor: 'black',
      borderRadius: '2px',
      borderTop: '1px solid white',
      padding: '10px 20px'
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
  },
  logo: {
    height: '50px'
  },
  sideBarLink: {
    paddingBottom: '5px',
    '&>a': {
      color: 'white'
    },
    '@media screen and (min-width: 768px)': {
      display: 'none'
    }
  }
};
