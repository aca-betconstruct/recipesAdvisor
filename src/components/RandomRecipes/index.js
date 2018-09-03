import React, { Component } from 'react';

import AnimatableImages from '../AnimatableImages';
import { AnimatableCards } from '../Cards';
import Recipes from '../../containers/Recipes';
import { Row } from 'mdbreact';
import FastCooking from '../../containers/FastCooking';

class RandomRecipes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <AnimatableImages />
        <Row>
          <FastCooking />
          <Recipes type={'random'} />
        </Row>
      </span>
    );
  }
}

export default RandomRecipes;
