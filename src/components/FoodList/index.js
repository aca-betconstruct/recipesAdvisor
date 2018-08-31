import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './styles';
import FoodCard from '../FoodCard';

class FoodList extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: ''
    };
  }
  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    const { getPreferences } = this.props;
    getPreferences(jwt);
  }

  handleInput = e => this.setState({ inputVal: e.target.value });

  idGen = () => {
    let id = 1;
    this.props.preferences.forEach(v => {
      if (v.id >= id) id = v.id + 1;
    });
    return id;
  };
  handleAdd = e => {
    if (this.state.inputVal.trim().length !== 0) {
        const jwt = localStorage.getItem('jwt');
      const { fetchPreferences } = this.props;
      fetchPreferences({
        text: this.state.inputVal.trim(),
        isLike: this.props.type,
        id: this.idGen()
      },jwt);
      this.setState({ inputVal: '' });
    }
  };
  handleClear = e => this.setState({ inputVal: '' });

  render() {
    const {
      classes,
      inputPlaceholder,
      preferences,
      type,
      deletePreference,
      isPreferencesFetching
    } = this.props;
    return !isPreferencesFetching ? (
      <div className={classes.paper}>
        {preferences.filter(v => v.type === type).map(v => (
          <FoodCard
            key={v.id}
            foodObj={v}
            deletePreference={deletePreference}
          />
        ))}
        <div>
          <input
            value={this.state.inputVal}
            onChange={this.handleInput}
            className={classes.addFood}
            placeholder={inputPlaceholder}
          />
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={this.handleClear}>Clear</button>
        </div>
      </div>
    ) : null;
  }
    static propTypes={
        classes:PropTypes.object,
        preferences:PropTypes.array,
        type:PropTypes.bool,
        deletePreference:PropTypes.func,
        isPreferencesFetching:PropTypes.bool,
        inputPlaceholder:PropTypes.string

    }
}

export default injectSheet(styles)(FoodList);
