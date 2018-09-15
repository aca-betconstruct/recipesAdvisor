import React, { Fragment } from 'react';
import AnimatableImages from '../AnimatableImages';
import Recipes from '../../containers/Recipes';
import { Row } from 'mdbreact';
import FastCooking from '../../containers/FastCooking';

const RandomRecipes = () => {
  return (
    <Fragment>
      <AnimatableImages />
      <Row className={'mx-5'}>
        <FastCooking />
        <Recipes type={'random'} />
      </Row>
    </Fragment>
  );
};

export default RandomRecipes;
