import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Tooltip } from 'mdbreact';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styles from './styles';

import Search from '../Search';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      calories: { min: 0, max: 5000 },
      search: '',
      activeLabel: ''
    };
  }

  changeLabel = label => {
    const { search, activeLabel, calories } = this.state;
    const { getRecipes, curPage, firstPage } = this.props;
    if (activeLabel === label) {
      this.runSearch({ key: 'Enter' }, '');
      this.setState({ activeLabel: '' });
    } else {
      if (search.trim()) {
        new Promise(resolve => resolve(firstPage)).then(() =>
          getRecipes(
            curPage,
            [label],
            search,
            'diet',
            [],
            [],
            'search',
            calories
          )
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
      const { search, calories } = this.state;
      const { firstPage, getRecipes } = this.props;
      if (search.trim()) {
        new Promise(resolve => resolve(firstPage())).then(() => {
          const { curPage } = this.props;
          getRecipes(
            curPage,
            activeLabel ? [activeLabel] : [],
            search,
            'diet',
            [],
            [],
            'search',
            calories
          );
        });
      }
    }
  };

  handleRangeChangeComplete = () => {
    const { getRecipes, curPage, preferences, favourites } = this.props;
    const { activeLabel, calories, search } = this.state;
    getRecipes(
      curPage,
      [activeLabel],
      search,
      'diet',
      preferences,
      favourites,
      'daily',
      calories
    );
  };

  changeCalories = calories => this.setState({ calories });

  render() {
    const { classes } = this.props;
    const { activeLabel, calories } = this.state;
    return (
      <div className={classes.main}>
        <div className={classes.filterLeftContainer}>
          <h1>Filter</h1>
          <div className={classes.inputRange}>
            <InputRange
              maxValue={5000}
              minValue={0}
              value={calories}
              onChange={this.changeCalories}
              allowSameValues={false}
              onChangeComplete={this.handleRangeChangeComplete}
              step={100}
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
            <Tooltip
              placement="top"
              tooltipContent="Protein/Fat/Carb values in 15/35/50 ratio"
            >
              Balanced

            </Tooltip>
          </div>
          <div
            onClick={() => this.changeLabel('low-fat')}
            className={`${classes.label} ${
              activeLabel === 'low-fat' ? classes.activeLabel : ''
            }`}
          >
            <Tooltip
              placement="top"
              tooltipContent="Less than 15% of total calories from fat"
            >
              Low Fat
            </Tooltip>
            
          </div>
          <div
            onClick={() => this.changeLabel('high-protein')}
            className={`${classes.label} ${
              activeLabel === 'high-protein' ? classes.activeLabel : ''
            }`}
          >
            <Tooltip
              placement="top"
              tooltipContent="More than 50% of total calories from proteins"
            >
              High Protein
            </Tooltip>
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
