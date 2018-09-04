import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import ReactAutocomplete from 'react-autocomplete';
import styles from './styles';
import FoodCard from '../FoodCard';
import { RANDOM_FOODS } from '../../constants';

class FoodList extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  componentDidMount() {
    const jwt = localStorage.getItem('jwt');
    const { getPreferences } = this.props;
    getPreferences(jwt);
  }

  handleInput = e => this.setState({ value: e.target.value });

  idGen = () => {
    let id = 1;
    this.props.preferences.forEach(v => {
      if (v.id >= id) id = v.id + 1;
    });
    return id + 13;
  };
  handleAdd = e => {
    if (this.state.value.trim().length !== 0) {
      const jwt = localStorage.getItem('jwt');
      const { fetchPreferences } = this.props;
      fetchPreferences(
        {
          text: this.state.value.trim(),
          isLike: this.props.type,
          id: this.idGen()
        },
        jwt
      );
      this.setState({ value: '' });
    }
  };
  handleClear = e => this.setState({ value: '' });

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
        {preferences.filter(v => v.isLike === type).map(v => (
          <FoodCard
            key={v.id}
            foodObj={v}
            deletePreference={deletePreference}
          />
        ))}
        <div>
          <ReactAutocomplete
            items={RANDOM_FOODS}
            shouldItemRender={(item, value) =>
              item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            getItemValue={item => item.name}
            renderItem={(item, highlighted) => (
              <div
                key={item.name}
                style={{
                  backgroundColor: highlighted ? '#eee' : 'transparent'
                }}
              >
                {item.name}
              </div>
            )}
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={value => this.setState({ value })}
          />
          <button onClick={this.handleAdd}>Add</button>
        </div>
      </div>
    ) : null;
  }
  static propTypes = {
    classes: PropTypes.object,
    preferences: PropTypes.array,
    type: PropTypes.bool,
    deletePreference: PropTypes.func,
    isPreferencesFetching: PropTypes.bool,
    inputPlaceholder: PropTypes.string
  };
}

export default injectSheet(styles)(FoodList);
