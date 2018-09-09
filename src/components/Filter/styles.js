const inputRangeColor = 'rgb(0, 190, 0)';

export default {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '94%',
    border: '1px solid rgb(139, 195, 74)',
    padding: '13px 9px 8px 9px',
    borderWidth: '0 0 1px 0',
    marginBottom: '5px',
    '@media screen and (max-width: 450px)': {
      width: '100%'
    }
  },
  filtersContainer: {
    display: 'flex',
    '@media screen and (max-width: 450px)': {
      marginRight: '25px'
    }
  },
  filterLeftContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90px',
    '@media screen and (max-width: 450px)': {
      marginLeft: '25px',
      marginRight: '15px'
    }
  },
  label: {
    userSelect: 'none',
    padding: '30px 8px 0 8px',
    fontSize: '16px',
    transition: '.6s',
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    '@media screen and (max-width: 680px)': {
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
