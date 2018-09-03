import { connect } from 'react-redux';

import FastCooking from '../../components/RandomRecipes/FastCooking';

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps)(FastCooking);