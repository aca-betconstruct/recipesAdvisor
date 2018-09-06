import backgroundImg from '../../images/acorns.jpg';

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
  signUpMessage: {
    marginTop: '5%',
    color: '#FFFFFF'
  },
  a: {
    marginLeft: '5%',
    textDecoration: 'none',
    color: '#f44336',
    transition: '0.5s all',
    WebkitTransition: '0.5s all',
    MozTransition: '0.5s all',
    OTransition: '0.5s all',
    '&:hover': {
      transition: '0.5s all',
      WebkitTransition: '0.5s all',
      MozTransition: '0.5s all',
      OTransition: '0.5s all'
    }
  },
  wrap: {
    width: '50%',
    margin: '7% auto auto 40%'
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
    backgroundColor: 'red'
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
    }
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
    }
  },
  contentLeft: {
    float: 'left',
    width: '50%',
    background: '#FFFFFF'
  },
  contentMain: {
    float: 'left',
    width: '50%'
  },
  contentInfo: {
    padding: '5em 3em',
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
      color: '#999999',
      margin: '1em 0 0 0',
      fontSize: '.9em',
      lineHeight: '1.8em'
    }
  },

  signIn: {
    '& h4': {
      textAlign: 'center',
      color: '#212121',
      fontSize: '.9em',
      margin: '1em 0 0 0',
      '& a': {
        color: '#f44336',
        textDecoration: 'none',
        '&:hover': {
          color: '#212121'
        }
      }
    }
  },

  signUpForm: {
    background: 'rgba(0, 0, 0, 0.56)',
    padding: '3em',
    // minHeight: '400px',
    height: '400.72px',
    '& h3': {
      color: '#FFFFFF',
      fontSize: '2em',
      margin: '0 0 1em 0',
      textTransform: 'uppercase',
      fontWeight: '700',
      letterSpacing: '2px'
    },
    '& h4': {
      color: '#FFFFFF',
      fontSize: '1em',
      margin: '0 0 1em 0',
      textTransform: 'uppercase',
      fontWeight: '700',
      letterSpacing: '2px'
    }
  },
  text: {
    outline: 'none',
    padding: '1em',
    background: 'none',
    border: '1px solid #ffffff',
    color: '#FFFFFF',
    fontSize: '.9em',
    margin: '0 0 1.5em 0',
    width: '93%'
  },

  password: {
    outline: 'none',
    padding: '1em',
    background: 'none',
    border: '1px solid #ffffff',
    color: '#FFFFFF',
    fontSize: '.9em',
    margin: '0 0 1.5em 0',
    width: '93%'
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
  footer: {
    margin: '2em 0 0 0',
    textAlign: 'center',
    '& p': {
      fontSize: '.9em',
      color: '#FFFFFF'
    }
  },

  '@media (max-width: 1440px)': {
    wrap: {
      width: '70%'
    }
  },
  '@media (max-width: 991px)': {
    wrap: {
      width: '80%',
      marginLeft: '20%'
    }
  },
  '@media (max-width: 900px)': {
    wrap: {
      width: '85%'
    }
  },
  '@media(max-width:800px)': {
    contentInfo: {
      '& h2': {
        fontSize: '1.2em'
      }
    },
    signUpForm: {
      minHeight: '445px'
    }
  },
  '@media (max-width: 768px)': {
    wrap: {
      width: '90%'
    }
  },
  '@media (max-width: 715px)': {
    contentLeft: {
      display: 'none'
    }
  },
  '@media (max-width: 667px)': {
    contentLeft: {
      float: 'none',
      width: '100%'
    },
    contentMain: {
      float: 'none',
      width: '70%'
    },
    signUpForm: {
      minHeight: '425px'
    },
    wrap: {
      width: '85%',
      marginLeft: '15%'
    },
    h1: {
      fontSize: '1.5em'
    },
    p: {
      fontSize: '1em'
    }
  },
  '@media (max-width: 450px)': {
    wrap: {
      margin: 'auto'
    }
  },
  '@media (max-width: 320px)': {
    wrap: {
      width: '90%'
    }
  }
};
