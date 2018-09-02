export default {
  view: {
    maxWidth: '300px',
    margin: '0 auto'
  },
  ingredients: {
    maxHeight: '137px',
    overflow: 'hidden',
    transitionProperty: 'overflow',
    transitionDuration: '1s',
    '&:hover': {
      overflowY: 'auto'
    },
    '&::-webkit-scrollbar': {
      width: '6px'
    },
    '&::-webkit-scrollbar-track': {
      background: 'lightgray',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'darkgray',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'gray'
    }
  }
};
