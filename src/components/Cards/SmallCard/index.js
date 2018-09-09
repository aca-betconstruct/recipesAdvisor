import React from 'react';
import { Row, Col, Mask, View } from 'mdbreact';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

const SmallCard = ({ classes, recipe }) => {
  return (
    <Row className={classes.row}>
      <Col md="3" className={classes.imgCol}>
        <View hover rounded className={`z-depth-1-half mb-4 ${classes.view}`}>
          <img className="img-fluid" src={recipe.image} alt={recipe.name} />
          <Link to={{ pathname: `/detail/${recipe.uri.slice(44)}` }}>
            <Mask overlay="white-slight" className="waves-light" />
          </Link>
        </View>
      </Col>
      <div className={classes.descriptionCol}>
        <Link
          to={{ pathname: `/detail/${recipe.uri.slice(44)}` }}
          className={`${classes.description} font-weight-bold dark-grey-text`}
        >
          Time: {recipe.time} min.
        </Link>
      </div>
    </Row>
  );
};
SmallCard.propTypes = {
  classes: PropTypes.object,
  recipe: PropTypes.object
};
export default injectSheet(styles)(SmallCard);
