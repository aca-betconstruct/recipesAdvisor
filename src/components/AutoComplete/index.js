import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { RANDOM_FOODS } from '../../constants';

class AutoComplete extends Component {
  render() {
    const { value, onChange, placeholder, handleFoodChoose } = this.props;
    return (
      <ReactAutocomplete
        placeholder={placeholder}
        items={RANDOM_FOODS}
        shouldItemRender={(item, value) =>
          item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        getItemValue={item => item.name}
        renderItem={(item, highlighted) => (
          <div
            key={item.name}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
          >
            {item.name}
          </div>
        )}
        inputProps={{ placeholder }}
        value={value}
        onChange={onChange}
        onSelect={handleFoodChoose}
      />
    );
  }
}

export default AutoComplete;
