export default {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    border: '1px solid rgb(0, 190, 0)',
    padding: '13px 13px 8px 13px',
    borderWidth: '0 0 1px 0',
    marginBottom: '5px'
  },
  filtersContainer: {
    display: 'flex'
  },
  label: {
    userSelect: 'none',
    padding: '8px',
    paddingTop: '19px',
    fontSize: '16px',
    transition: '.6s',
    color: 'black',
    cursor: 'pointer',
    '@media screen and (max-width: 650px)': {
      display: 'none'
    }
  },
  activeLabel: {
    color: 'green',
    transition: '.6s'
  }
};
