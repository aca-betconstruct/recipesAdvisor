export default {
  main: {
    display: 'flex',
    flexDirection: 'row'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    '@media screen and (max-width: 820px)': {
      width: '100%'
    }
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    '@media screen and (max-width: 450px)': {
      width: '100%'
    }
  }
};
