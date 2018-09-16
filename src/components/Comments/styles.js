export default {
  commentsWrapper: {
    margin: '10% 0',
    paddingTop: '5%',
    border: '1px solid rgb(139, 195, 74)',
    borderRadius: '5px'
  },
  formGroup: {
    width: '100%'
  },
  title: {
    fontWeight: 'bold',
    paddingLeft: '10%'
  },
  textArea: {
    margin: '30px auto 0',
    width: '80%',
    resize: 'none',
    borderRadius: '5px',
    borderColor: 'lightgray',
    '&:focus': {
      boxShadow:
        '0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.25)',
      borderColor: 'lightgray'
    }
  },
  row: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '5%',
    margin: 'auto',
    width: '90%',
    borderBottom: '1px solid rgb(139, 195, 74)'
  },
  button: {
    backgroundColor: 'rgb(139, 195, 74)',
    cursor: 'pointer',
    border: 0,
    color: 'white',
    padding: '6px 16px',
    marginBottom: '5%',
    borderRadius: '5px',
    '&:focus': {
      outline: 0
    }
  }
};
