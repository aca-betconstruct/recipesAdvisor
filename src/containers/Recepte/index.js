import { connect } from 'react-redux';

import ReceptePage from '../../components/Recepte';

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps)(ReceptePage);
