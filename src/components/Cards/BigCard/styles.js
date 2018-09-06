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
  favIcon: {
    color: 'red',
    position: 'absolute',
    zIndex: 10,
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '25px'
  },
  description: {
    textAlign: 'center',
    '&>p': {
      margin: 0
    }
  }
};
