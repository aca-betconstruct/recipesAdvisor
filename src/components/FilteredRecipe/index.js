import React, { Component } from 'react';
import Recipes from '../../containers/Recipes';

class FilteredRecipe extends Component {
  render() {
    const { type, labels } = this.props.filter;
    const { q } = this.props;
    return <Recipes q={q} labels={labels} labelsType={type} />;
  }
}
export default FilteredRecipe;
