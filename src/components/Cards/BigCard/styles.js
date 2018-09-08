export default {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  view: {
    maxWidth: '300px',
    margin: '0 auto'
  },
  favourite: {
    backgroundColor: 'rgba(139, 195, 74, .7)',
    '&:hover': {
      backgroundColor: 'rgb(139, 195, 74)'
    }
  },
  notFavourite: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    '&:hover': {
      backgroundColor: 'rgb(0, 0, 0)'
    }
  },
  iconWrapper: {
    borderRadius: '50%',
    height: '45px',
    width: '45px',
    padding: '12px 10px',
    position: 'absolute',
    zIndex: 10,
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    transitionProperty: 'background',
    transitionDuration: '.4s'
  },
  favIcon: {
    color: 'white',
    fontSize: '25px'
  },
  description: {
    textAlign: 'center',
    '&>p': {
      margin: 0
    }
  }
};
