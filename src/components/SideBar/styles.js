export default {
  sideBar: {
    width: '20%',
    background: 'rgba(0, 0, 0, 0.8)',
    backgroundSize: 'cover',
    minHeight: '100vh',
    paddingTop: '15%',
    '@media screen and (max-width: 820px)': {
      display: 'none'
    }
  },
  button: {
    font: 'roboto',
    outline: 0,
    color: '#ffffff',
    fontSize: '.9em',
    textDecoration: 'none',
    padding: '1em 2em',
    cursor: 'pointer',
    background: 'none',
    textTransform: 'uppercase',
    fontWeight: '600',
    textAlign: 'center',
    border: 'none',
    transition: '0.5s all',
    width: '100%',
    marginTop: '5px',
    '-webkit-transition': '0.5s all',
    '-o-transition': '0.5s all',
    '-moz-transition': '0.5s all',
    '-ms-transition': '0.5s all',
    '&:hover': {
      backgroundColor: 'rgb(139, 195, 74)',
      outline: 0
    },
    '&:focus': {
      outline: 0
    }
  }
};
