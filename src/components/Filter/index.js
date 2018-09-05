import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { search, activeLabel } = this.state;
    const { getRecipes, curPage, firstPage } = this.props;
    if (activeLabel === label) {
      this.runSearch({ key: 'Enter' }, '');
      this.setState({ activeLabel: '' });
    } else {
      const Filter = new Promise(resolve => resolve(firstPage));
      if (search.trim().length) {
        Filter.then(() =>
          getRecipes(curPage, [label], search, 'diet', [], [], 'search')
        );
        this.setState({ activeLabel: label });
        this.runSearch({ key: 'Enter' }, label);
      } else {
        this.setState({ activeLabel: label });
      }
    }
  };

  handleInput = e => this.setState({ search: e.target.value });

  runSearch = (e, label) => {
    if (e.key === 'Enter') {
      const activeLabel = label || this.state.activeLabel;
      const { search } = this.state;
      const { firstPage, getRecipes } = this.props;
      const Search = new Promise(resolve => resolve(firstPage()));
      Search.then(() => {
        const { curPage } = this.props;
        getRecipes(
          curPage,
          activeLabel ? [activeLabel] : [],
          search,
          '',
          [],
          [],
          'search'
        );
      });
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
  static propTypes = {
    classes: PropTypes.object,
    getRecipes: PropTypes.func,
    curPage: PropTypes.number,
    firstPage: PropTypes.func
  };
}

export default injectSheet(styles)(Filter);
