const inputRangeColor = 'rgb(0, 190, 0)';

export default {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    border: '1px solid rgb(139, 195, 74)',
    padding: '13px 13px 8px 13px',
    borderWidth: '0 0 1px 0',
    marginBottom: '5px'
  },
  filtersContainer: {
    display: 'flex'
  },
  filterLeftContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90px'
  },
  label: {
    userSelect: 'none',
    padding: '38px 8px 0 8px',
    fontSize: '16px',
    transition: '.6s',
    color: 'black',
    cursor: 'pointer',
    '@media screen and (max-width: 650px)': {
      display: 'none'
    }
  },
  activeLabel: {
    color: 'rgb(139, 195, 74)',
    transition: '.6s'
  },
  inputRange: {
    width: '100%',
    marginBottom: '8px',
    padding: '0 6px',
    '& > div': {
      '& > span': {
        display: 'none'
      },
      '& > div': {
        '& > span:nth-of-type(2) > span': {
          // backgroundColor: 'black'
          top: '7px'
        },
        '& > div': {
          backgroundColor: inputRangeColor
        },
        '& > span > div': {
          backgroundColor: inputRangeColor,
          borderColor: inputRangeColor,
          transitionDuration: '.5s'
        }
      }
    }
  }
};
