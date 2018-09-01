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
        <Recipes type={'random'} />
      </span>
    );
  }
}

export default RandomRecipes;
