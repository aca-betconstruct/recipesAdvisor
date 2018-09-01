import React, { Component } from 'react';

import AnimatableImages from '../AnimatableImages';
import { AnimatableCards } from '../Cards';
import Recipes from '../../containers/Recipes';

class RandomRecipes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <AnimatableImages />
        <AnimatableCards />
        <Recipes />
      </span>
    );
  }
}

export default RandomRecipes;
