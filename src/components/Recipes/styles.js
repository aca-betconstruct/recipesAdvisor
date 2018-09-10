export default {
  scrollBar: {
    height: '500px',
    overflowX: 'hidden',
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
