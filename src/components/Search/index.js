import React, { Component } from 'react';
import { Fa } from 'mdbreact';
import injectSheet from 'react-jss';

import styles from './styles';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isSearchIconVisible: true,
      isCloseIconVisible: false
    };

    this.handleOpenClick = this.handleOpenClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleOpenClick() {
    const { isOpen } = this.state;
    if (!isOpen) {
      this.setState({
        isOpen: true,
        isSearchIconVisible: false
      });
      setTimeout(() => this.setState({ isCloseIconVisible: true }), 500);
    }
  }

  handleCloseClick() {
    setTimeout(() => this.setState({ isSearchIconVisible: true }), 460);
    this.setState({
      isOpen: false,
      isCloseIconVisible: false
    });
  }

  render() {
    const { classes, onChange, onKeyDown, value } = this.props;
    const { isOpen, isSearchIconVisible, isCloseIconVisible } = this.state;
    return (
      <div className={`${classes.form} ${isOpen ? '' : classes.formClose}`}>
        <input
          className={`form-control ${classes.searchBar} ${
            isOpen ? '' : classes.closed
          }`}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          type={'text'}
          placeholder={'Search'}
          aria-label={'Search'}
          onClick={this.handleOpenClick}
        />
        <Fa
          icon={'close'}
          size={'sm'}
          className={`${classes.closeIcon} ${
            isCloseIconVisible ? '' : classes.dNone
          }`}
          onClick={this.handleCloseClick}
        />
        <span className={isSearchIconVisible ? classes.searchIcon : ''} />
      </div>
    );
  }
}

export default injectSheet(styles)(Search);
