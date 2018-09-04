import React from 'react';
import { Row, Col, Mask, View } from 'mdbreact';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './styles';

const SmallCard = ({ classes, recipe }) => {
  return (
    <Row className={classes.row}>
      <Col md="3" className={classes.imgCol}>
        <View hover rounded className={`z-depth-1-half mb-4 ${classes.view}`}>
          <img className="img-fluid" src={recipe.image} alt="Sample image" />
          <a>
            <Mask overlay="white-slight" className="waves-light" />
          </a>,Small
        </View>
      </Col>
      <div className={classes.descriptionCol}>
        <p className={`${classes.description} font-weight-bold dark-grey-text`}>
          Time: {recipe.time} min.
        </p>
      </div>
    </Row>
  );
};
SmallCard.propTypes = {
  classes: PropTypes.object,
  recipe: PropTypes.object
};
export default injectSheet(styles)(SmallCard);
