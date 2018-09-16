export default {
  main: {
    width: '80%',
    margin: '2% auto',
    maxHeight: '500px',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '6px'
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(139, 195, 74, 0.5)',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(139, 195, 74, 0.8)',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'rgb(139, 195, 74)'
    }
  },
  name: {
    paddingLeft: '2.5%'
  },
  excerpt: {
    margin: '5% 0',
    borderBottom: '1px solid rgb(139, 195, 74)'
  },
  comment: {
    padding: '0 7% 0 5%',
    wordBreak: 'break-word',
    marginTop: '-10px'
  },
  createdAt: {
    textAlign: 'right',
    padding: '0 10%',
    fontSize: '11px',
    fontWeight: '500',
    color: 'gray'
  }
};
