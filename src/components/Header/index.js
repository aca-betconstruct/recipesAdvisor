import React, { Component } from 'react';
import {
  Animation,
  Container,
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'mdbreact';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import logo from '../../images/logo.png';

import styles from './styles';

let timeout;

const debounce = (func, wait) => {
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      scrollPositionY: 0,
      isLogoAnimated: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.mouseEntered = this.mouseEntered.bind(this);
    this.mouseLeaved = this.mouseLeaved.bind(this);
    this.handleTogglerClick = this.handleTogglerClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  componentDidMount() {
    return window.addEventListener('scroll', debounce(this.handleScroll, 16));
  }

  componentWillUnmount() {
    clearTimeout(timeout);
  }

  handleScroll() {
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  }

  mouseEntered() {
    this.setState({ isLogoAnimated: true });
  }

  mouseLeaved() {
    this.setState({ isLogoAnimated: false });
  }

  handleTogglerClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleLogoutClick = () => {
    this.props.logoutUser();
  };

  handleLogoClick() {
    const { firstPage } = this.props;
    firstPage();
  }

  render() {
    const { classes, isAuth } = this.props;
    const { pathname } = this.props.location;
    const {
      scrollPositionY,
      isWideEnough,
      collapse,
      isLogoAnimated
    } = this.state;
    return (
      <header
        className={`${classes.headerArea} ${
          scrollPositionY !== 0 ? classes.sticky : ''
        } ${
          pathname === '/aboutus' ||
          pathname === '/contactus' ||
          pathname.slice(0, 7) === '/detail'
            ? classes.black
            : ''
        }`}
      >
        <Container className={classes.container}>
          <div className={'row'}>
            <div className={'col-12'}>
              <Navbar
                color="transparent"
                dark
                expand="md"
                className={`${classes.navBar} ${
                  scrollPositionY !== 0
                    ? classes.navBarScroll
                    : collapse
                      ? classes.navBarScroll
                      : ''
                } ${
                  pathname === '/aboutus' ||
                  pathname === '/contactus' ||
                  pathname.slice(0, 7) === '/detail'
                    ? classes.black
                    : ''
                }`}
              >
                <NavbarBrand
                  tag={'span'}
                  onMouseEnter={this.mouseEntered}
                  onMouseLeave={this.mouseLeaved}
                  onClick={this.handleLogoClick}
                >
                  {isLogoAnimated ? (
                    <Animation type="tada">
                      <Link
                        to={isAuth ? '/home' : '/'}
                        className={classes.navBarBrand}
                      >
                        <img src={logo} alt="LOGO" className={classes.logo} />
                      </Link>
                    </Animation>
                  ) : (
                    <Link
                      to={isAuth ? '/home' : '/'}
                      className={classes.navBarBrand}
                    >
                      <img src={logo} alt="LOGO" className={classes.logo} />
                    </Link>
                  )}
                </NavbarBrand>
                {!isWideEnough && (
                  <NavbarToggler onClick={this.handleTogglerClick} />
                )}
                <Collapse
                  isOpen={collapse}
                  className={classes.collapsed}
                  navbar
                >
                  {isAuth ? (
                    <NavbarNav right>
                      <NavItem className={classes.sideBarLink}>
                        <Link to="/home">Daily Recipes</Link>
                      </NavItem>
                      <NavItem className={classes.sideBarLink}>
                        <Link to="/">Discover Recipes</Link>
                      </NavItem>
                      <NavItem className={classes.sideBarLink}>
                        <Link to="/home/favourites">Favourite Recipes</Link>
                      </NavItem>
                      <NavItem className={classes.sideBarLink}>
                        <Link to="/calculator">Calculator</Link>
                      </NavItem>
                      <NavItem className={classes.sideBarLink}>
                        <Link to="/home/preferences">Preferences</Link>
                      </NavItem>
                      <NavItem>
                        <Link
                          to={'/login'}
                          style={{ color: 'white' }}
                          onClick={this.handleLogoutClick}
                        >
                          Log Out
                        </Link>
                      </NavItem>
                    </NavbarNav>
                  ) : (
                    <NavbarNav right>
                      <NavItem>
                        <NavLink to="/login">Log In</NavLink>
                      </NavItem>
                    </NavbarNav>
                  )}
                </Collapse>
              </Navbar>
            </div>
          </div>
        </Container>
      </header>
    );
  }
  static propTypes = {
    classes: PropTypes.object,
    firstPage: PropTypes.func,
    isAuth: PropTypes.bool,
    location: PropTypes.object
  };
}

export default injectSheet(styles)(Header);
