import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import ReactAutocomplete from 'react-autocomplete';
import styles from './styles';
import FoodCard from '../../containers/FoodCard';
import { RANDOM_FOODS } from '../../constants';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.autoCompleteItems = this.autoCompleteItems.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    const { getPreferences, jwt } = this.props;
    getPreferences(jwt);
  }

  autoCompleteItems() {
    const { preferences } = this.props;
    let randomFoods = RANDOM_FOODS;
    preferences.forEach(item => {
      randomFoods = randomFoods.filter(food => item.text !== food.name);
    });
    return randomFoods;
  }

  handleAdd(text) {
    const { fetchPreferences, jwt } = this.props;
    fetchPreferences(
      {
        text,
        isLike: this.props.type
      },
      jwt
    );
    this.setState({ value: '' });
  }

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
        <div className={classes.addFood}>
          <ReactAutocomplete
            inputProps={{ placeholder: inputPlaceholder }}
            items={this.autoCompleteItems()}
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
            onSelect={this.handleAdd}
            menuStyle={{
              borderRadius: '3px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
              background: 'rgba(255, 255, 255)',
              fontSize: '90%',
              position: 'fixed',
              overflow: 'auto',
              maxHeight: '50%',
              padding: '2px'
            }}
          />
          <button
            className={`${classes.button} ${
              type ? classes.addButton : classes.removeButton
            }`}
          >
            {type ? '+' : '-'}
          </button>
        </div>
        {preferences.filter(v => v.isLike === type).map(v => (
          <FoodCard
            key={v.id}
            foodObj={v}
            deletePreference={deletePreference}
          />
        ))}
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
