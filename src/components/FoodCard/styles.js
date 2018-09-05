export default {
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    margin: '3px 0 3px 0'
  },
  removeButContainer: {
    backgroundColor: 'rgb(198, 67, 67)',
    width: '44px',
    border: '1px solid rgb(198, 67, 67)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        color: 'black'
      }
    }
  },
  removeBut: {
    fontSize: '29px',
    width: '28px',
    height: '40px',
    transform: 'rotate(45deg)',
    textAlign: 'center',
    lineHeight: '38px',
    color: 'white',
    userSelect: 'none'
  },
  text: {
    display: 'inline',
    width: 'calc(100% - 44px)',
    lineHeight: '33px',
    fontSize: '18px',
    border: '1px solid rgb(211, 211, 211)',
    cursor: 'default',
    padding: '5px 8px 5px 8px',
    userSelect: 'none'
  }
};
