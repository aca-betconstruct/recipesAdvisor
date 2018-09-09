import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styles from './styles';

import Search from '../Search';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      calories: { min: 0, max: 2000 },
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
      const range = this.getRange();
      const Filter = new Promise(resolve => resolve(firstPage));
      if (search.trim().length) {
        Filter.then(() =>
          getRecipes(curPage, [label], search, 'diet', [], [], 'search', range)
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
        const range = this.getRange();
        const { curPage } = this.props;
        getRecipes(
          curPage,
          activeLabel ? [activeLabel] : [],
          search,
          '',
          [],
          [],
          'search',
          range
        );
      });
    }
  };

  handleRangeChangeComplete = () => {
    this.runSearch({ key: 'Enter' });
  };

  changeCalories = calories => this.setState({ calories });

  getRange = () => `${this.state.calories.min}-${this.state.calories.max}`;

  render() {
    const { classes } = this.props;
    const { activeLabel, calories } = this.state;
    return (
      <div className={classes.main}>
        <div className={classes.filterLeftContainer}>
          <h1>Filter</h1>
          <div className={classes.inputRange}>
            <InputRange
              maxValue={2000}
              minValue={0}
              value={calories}
              onChange={this.changeCalories}
              allowSameValues={false}
              onChangeComplete={this.handleRangeChangeComplete}
              step={5}
            />
          </div>
        </div>
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
            onClick={() => this.changeLabel('low-fat')}
            className={`${classes.label} ${
              activeLabel === 'low-fat' ? classes.activeLabel : ''
            }`}
          >
            Low Fat
          </div>
          <div
            onClick={() => this.changeLabel('high-protein')}
            className={`${classes.label} ${
              activeLabel === 'high-protein' ? classes.activeLabel : ''
            }`}
          >
            High Protein
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
