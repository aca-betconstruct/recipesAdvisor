import { connect } from 'react-redux';
import FoodCard from '../../components/FoodCard';

const mapStateToProps = state => {
  return {
    jwt: state.jwt
  };
};

export default connect(mapStateToProps)(FoodCard);
