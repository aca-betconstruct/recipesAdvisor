import React from 'react';
import AnimatableImages from '../AnimatableImages';
import Recipes from '../../containers/Recipes';
import { Row } from 'mdbreact';
import FastCooking from '../../containers/FastCooking';

const RandomRecipes = () => {
  return (
    <span>
      <AnimatableImages />
      <Row>
        <FastCooking />
        <Recipes type={'random'} />
      </Row>
    </span>
  );
};

export default RandomRecipes;
