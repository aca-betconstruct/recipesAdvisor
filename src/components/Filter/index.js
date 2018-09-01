import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

import Search from '../Search';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      activeLabel: ''
    };
  }

  changeLabel = label => {
    const { activeLabel } = this.state;
    if (activeLabel === label) this.setState({ activeLabel: '' });
    else this.setState({ activeLabel: label });
  };

  handleInput = e => this.setState({ search: e.target.value });

  runSearch = e => {
    if (e.key === 'Enter') {
      const { search, label } = this.state;
      if (label) this.props.getRecipes(0, [label], search.trim(), 'diet');
      else this.props.getRecipes(0, [label], search.trim());
    }
  };

  render() {
    const { classes } = this.props;
    const { activeLabel } = this.state;
    return (
      <div className={classes.main}>
        <h1>Filter</h1>
        <div className={classes.filtersContainer}>
          <div
            onClick={() => this.changeLabel('balanced')}
            className={`${classes.label} ${
              activeLabel === 'balanced' ? classes.activeLabel : ''
            }`}
          >
            Balanced
          </div>
          <div
            onClick={() => this.changeLabel('vegeterian')}
            className={`${classes.label} ${
              activeLabel === 'vegeterian' ? classes.activeLabel : ''
            }`}
          >
            Vegeterian
          </div>
          <div
            onClick={() => this.changeLabel('vegan')}
            className={`${classes.label} ${
              activeLabel === 'vegan' ? classes.activeLabel : ''
            }`}
          >
            Vegan
          </div>
          <Search
            onChange={this.handleInput}
            onKeyDown={this.runSearch}
            value={this.state.search}
          />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Filter);
