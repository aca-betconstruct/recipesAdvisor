import backgroundImg from '../../images/error.png';

export default {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    background: `url(${backgroundImg}) no-repeat center`,
    backgroundColor: 'rgb(164, 228, 226)',
    '@media screen and (min-width: 796px)': {
      backgroundSize: '100%'
    }
  },
  btn: {
    position: 'absolute',
    bottom: '15%'
  }
};
