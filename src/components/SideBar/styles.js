export default {
  container: {
    position: "absolute",
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: '295px',
    width: '150px',
    '& > a': {
      marginTop: '25px',
      padding: '4px 4px 4px 6px',
      fontSize: '17px',
      textDecoration: 'none',
      color: 'black',
      backgroundColor: 'white',
      border: '1px solid black',
      borderWidth: '0 0 1px 0',
      transition: '.2s',
      '&:hover': {
        color: 'rgb(0, 190, 0)'
      }
    }
  },
  navIcon: {
    width: '60px',
    height: '45px',
    position: 'relative',
    margin: '50px auto',
    '-webkit-transform': 'rotate(0deg)',
    '-moz-transform': 'rotate(0deg)',
    '-o-transform': 'rotate(0deg)',
    transform: 'rotate(0deg)',
    '-webkit-transition': '.5s ease-in-out',
    '-moz-transition': '.5s ease-in-out',
    '-o-transition': '.5s ease-in-out',
    transition: '.5s ease-in-out',
    cursor: 'pointer',
    '& span': {
      display: 'block',
      position: 'absolute',
      height: '9px',
      width: '100%',
      background: '#d3531a',
      borderRadius: '9px',
      opacity: 1,
      left: 0,
      '-webkit-transform': 'rotate(0deg)',
      '-moz-transform': 'rotate(0deg)',
      '-o-transform': 'rotate(0deg)',
      transform: 'rotate(0deg)',
      '-webkit-transition': '.25s ease-in-out',
      '-moz-transition': '.25s ease-in-out',
      '-o-transition': '.25s ease-in-out',
      transition: '.25s ease-in-out',
      '&:nth-child(1)': {
        top: '0px'
      },
      '&:nth-child(2), &:nth-child(3)': {
        top: '18px'
      },
      '&:nth-child(4)': {
        top: '36px'
      }
    },
    '&.open span': {
      '&:nth-child(1)': {
        top: '18px',
        width: '0%',
        left: '50%'
      },
      '&:nth-child(2)': {
        '-webkit-transform': 'rotate(45deg)',
        '-moz-transform': 'rotate(45deg)',
        '-o-transform': 'rotate(45deg)',
        transform: 'rotate(45deg)'
      },
      '&:nth-child(3)': {
        '-webkit-transform': 'rotate(-45deg)',
        '-moz-transform': 'rotate(-45deg)',
        '-o-transform': 'rotate(-45deg)',
        transform: 'rotate(-45deg)'
      },
      '&:nth-child(4)': {
        top: '18px',
        width: '0%',
        left: '50%'
      }
    }
  },
  
  button: {
    font: 'roboto',
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
    width: "100%",
    marginTop: "5px",
    '-webkit-transition': '0.5s all',
    '-o-transition': '0.5s all',
    '-moz-transition': '0.5s all',
    '-ms-transition': '0.5s all',
    "&:hover": {
      backgroundColor: '#f44336',
    }
  },
  sidebar: {
    width:"30%"
  }
};