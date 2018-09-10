import backgroundImg from '../../images/loginBack.jpg';
export default {
  '@global': {
    'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, nav ul, nav li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline'
    },
    'article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section': {
      display: 'block'
    },
    'ol,ul': {
      listStyle: 'none',
      margin: '0px',
      padding: '0px'
    },
    'blockquote, q': {
      quotes: 'none'
    },
    'blockquote:before, blockquote:after, q:before, q:after': {
      content: "''"
    },
    table: {
      borderCollapse: 'collapse',
      borderSpacing: 0
    },
    body: {
      background: `url(${backgroundImg}) no-repeat center center fixed`,
//      background: 'red',
      backgroundSize: 'cover',
      minHeight: '100vh',
      fontFamily: "'Open Sans', sans-serif",
      padding: '4em 0'
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: 0
    },
    p: {
      margin: 0
    },
    ul: {
      margin: 0,
      padding: 0
    },
    label: {
      margin: 0
    },
    '::-webkit-input-placeholder': {
      color: '#FFFFFF'
    }
  },
  welcome: {
    fontSize: '3em',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  boxWrap: {
    height: '700px',
    width: '50%',
    margin: '2em auto 0'
  },
  grids: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  callbacksContainer: {
    position: 'relative',
    float: 'left',
    width: '100%',
    backgroundColor: 'blue'
  },
  callbacks: {
    position: 'relative',
    listStyle: 'none',
    overflow: 'hidden',
    width: '100%',
    padding: '0',
    margin: '0',
    '& li': {
      position: 'absolute',
      width: '100%'
    },
  },
  rslides: {
    position: 'relative',
    listStyle: 'none',
    overflow: 'hidden',
    width: '100%',
    padding: '0',
    backgroundColor: '#FFFFFF',
    '& li': {
      position: 'relative',
      display: 'block',
      float: 'left'
    },
  },
  boxLeft: {
    float: 'left',
    width: '50%',
    maxHeight: "658.56px"
  
  },
  boxRight: {
    float: 'left',
    width: '50%',
    height: '658.666px',
    padding: '5em',
    background: '#FFFFFF',
    textAlign: 'center',
    '& h2': {
      color: '#212121',
      fontSize: '1.5em',
      fontWeight: '800'
    }
  },
  descriptionBanner: {
    margin: '2em 0 0 0',
    textAlign: 'center',
    '& h3': {
      color: '#212121',
      fontSize: '1em',
      margin: '0',
      textTransform: 'uppercase',
      fontWeight: '600',
      letterSpacing: '1px'
    },
    '& p': {
      color: '#51585e',
      margin: '1em 0 0 0',
      fontSize: '1em',
      lineHeight: '1.8em'
    }
  },
  formsBox: {
    background: 'rgba(0, 0, 0, 0.56)',
    padding: '3em',
    minHeight: '426px',
    maxHeight: "658.56px",
    '& h2': {
      color: '#FFFFFF',
      fontSize: '1em',
      margin: '0 0 1em 0',
      textTransform: 'uppercase',
      fontWeight: '700',
      letterSpacing: '2px'
    }
  },
  selector: {
    outline: 'none',
    padding: '1em',
    background: 'none',
    border: '1px solid white',
    //color: '#181035',
    color: '#faa96a',
    fontSize: '.9em',
    margin: '0 0 1.5em 0',
    width: '100%',
    "& :hover": {
      backgroundColor:'blue',
      pointerEvents: "none",
    }
  },
  textInput: {
    outline: 'none',
    padding: '1em',
    background: 'none',
    border: '1px solid white',
    color: '#faa96a',
    fontSize: '.9em',
    margin: '0 0 1.5em 0',
    width: '100%'
  },
  
  button: {
    color: '#ffffff',
    fontSize: '.9em',
    textDecoration: 'none',
    padding: '1em 2em',
    cursor: 'pointer',
    background: '#F44336',
    textTransform: 'uppercase',
    fontWeight: '600',
    textAlign: 'center',
    border: 'solid 1px #f44336',
    transition: '0.5s all',
    '-webkit-transition': '0.5s all',
    '-o-transition': '0.5s all',
    '-moz-transition': '0.5s all',
    '-ms-transition': '0.5s all',
    '&:hover': {
      background: 'none',
      border: 'solid 1px #FFFFFF'
    }
  },
  linkButton: {
    color: '#ffffff',
    fontSize: '.9em',
    textDecoration: 'none',
    padding: '1em 2em',
    cursor: 'pointer',
    background: '#F44336',
    textTransform: 'uppercase',
    fontWeight: '600',
    textAlign: 'center',
    border: 'solid 1px #f44336',
    transition: '0.5s all',
    marginLeft: '5px',
    '-webkit-transition': '0.5s all',
    '-o-transition': '0.5s all',
    '-moz-transition': '0.5s all',
    '-ms-transition': '0.5s all',
    '&:hover': {
      background: 'none',
      border: 'solid 1px #FFFFFF',
      color: "#FFFFFF"
    }
  },
  btnPanel: {
    display: "flex",
    flexWrap: "none"
},
  a: {
    color: 'red',
    '&:hover': {
      backgroundColor: 'red'
    }
  },
  '@media (max-width: 1550px)': {
    boxRight: {
      padding: "4em"
      
    }
  },
  '@media (max-width: 1380px)': {
    welcome: {
      fontSize: "2.8em"
    }
  },
  '@media (max-width: 1300px)': {
    welcome: {
      fontSize: "2.6em"
    }
  },
  '@media (max-width: 1200px)': {
    welcome: {
      fontSize: "2.0em"
    }
  },
  '@media (max-width: 780px)': {
    welcome: {
      fontSize: "1.5em"
    }
  },
  '@media (max-width: 1366px)': {
    
    boxWrap: {
      width: '60%'
    },
    formsBox: {
      height: "658.56px"
    }
  },
  '@media (max-width: 1500px)': {
    boxRight: {
      padding: "3em"
    }
  },
  '@media (max-width: 1080px)': {
    boxWrap: {
      width: '75%'
    }
  },
  '@media (max-width: 991px)': {
    boxWrap: {
      width: '80%'
    }
  },
  '@media (max-width: 900px)': {
    boxWrap: {
      width: '85%'
    }
  },
  '@media (max-width: 768px)': {
    boxWrap: {
      width: '90%'
    }
  },
  '@media (max-width: 730px)': {
    boxWrap: {
      display: "flex",
      flexDirection: "column"
    },
    boxLeft: {
      float: 'none',
      width: '100%'
    },
    boxRight: {
      float: 'none',
      width: '100%'
    },
  },
  '@media (max-width: 667px)': {
    boxLeft: {
      float: 'none',
      width: '100%'
    },
    boxRight: {
      float: 'none',
      width: '100%'
    }
  },
  '@media (max-width: 440px)': {
    boxRight: {
      padding: "4em"
    }
  },
  '@media (max-width: 420px)': {
    boxRight: {
      padding: "3.5em"
  
    }
    },
  '@media (max-width: 390px)': {
    boxRight: {
      padding: "3em"
      
    }
  },
  
    '@media (max-width: 370px)': {
    boxWrap: {
      width: '90%',
      fontSize: '.9em'
    },
      welcome: {
        fontSize: "1em"
      }
  }
};














//
//
//
// export default {
//   boxboxWrap: {
//     width: '712px',
//     display: 'flex',
//     flexboxWrap: 'noboxWrap',
//     margin: 'auto',
//     border: '1px solid red'
//   },
//   box: {
//     minWidth: '255px',
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     border: '1px solid black',
//     padding: '20px',
//     width: '255px',
//     height: '510px',
//     margin: '0 30px'
//   },
//
//   result: {
//     textAlign: 'center'
//   },
//
//   listTitle: {
//     font: '40px arial, sans-serif',
//     color: 'white',
//     textAlign: 'center',
//     margin: '15px 0 10px 0'
//   },
//   button: {
//     minWidth: '265px',
//     margin: '0 20% 30px 20%',
//     backgroundColor: 'rgb(71, 166, 47)',
//     border: '2px solid rgb(71, 166, 47)',
//     borderRadius: '10px',
//     font: '26px arial, sans-serif',
//     color: 'white',
//     padding: '5px 0 5px 0',
//     outline: 'none',
//     cursor: 'pointer',
//     textAlign: 'center',
//     '&:focus, &:hover, &:visited, &:link, &:active': {
//       textDecoration: 'none',
//       color: 'white'
//     },
//     '&:hover': {
//       backgroundColor: 'white',
//       color: 'rgb(71, 166, 47)'
//     }
//   },
//   noPrefsContainer: {
//     minWidth: '251px',
//     height: '34px',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     color: 'white',
//     margin: '2px auto',
//     alignItems: 'center',
//     lineHeight: '25px'
//   },
//   noPrefsText: {
//     display: 'inline-block',
//     fontSize: '19px',
//     marginRight: '10px'
//   }
// };
