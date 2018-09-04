import React from 'react';
import PropTypes from 'prop-types';

import Recipes from '../../containers/Recipes';

const FilteredRecipe = ({ filter }) => {
  const { type, labels } = filter;
  const { q } = this.props;
  return <Recipes q={q} labels={labels} labelsType={type} />;
};
FilteredRecipe.propTypes = {
  filter: PropTypes.object
};
export default FilteredRecipe;
