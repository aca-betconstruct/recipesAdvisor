import backgroundImg from '../../images/backgroundImg.jpg';

export default {
  main: {
    background: `url(${backgroundImg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh'
  },
  link: {
    textDecoration: 'none',
    font: '25px arial, sans-serif',
    textAlign: 'center',
    color: 'white',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  },
  title: {
    width: '100%',
    fontSize: '70px',
    textAlign: 'center',
    color: 'white',
    padding: '5vh 0 0 0',
    margin: 0
  }
};
