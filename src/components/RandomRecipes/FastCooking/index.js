import React, { Component } from 'react';
import { Container, Col } from 'mdbreact';
import injectSheet from 'react-jss';

import { SmallCard } from '../../Cards';

import styles from './styles';

let fetchInterval;

class FastCooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    let recipe = [];
    fetchInterval = setInterval(() => {
      const { recipes } = this.props;
      recipes.map(rec =>
        rec.hits.map(item =>
          recipe.push({
            image: item.recipe.image,
            time: item.recipe.totalTime
          })
        )
      );
      console.log('Start:', recipe);
      recipe = recipe.filter(item => item.time > 0 && item.time <= 60);
      console.log('Middle:', recipe);
      recipe.splice(4, recipe.length - 6);
      this.setState({ recipes: recipe });
      console.log('End:', this.state.recipes);
    }, 1000);
  }

  render() {
    const { classes } = this.props;
    const { recipes } = this.state;
    if (recipes.length) {
      clearInterval(fetchInterval);
      return (
        <Container
          style={{
            margin: recipes.length === 6 ? 'auto auto 0' : 'auto'
          }}
          className={classes.container}
        >
          {recipes.map(recipe => (
            <SmallCard recipe={recipe} />
          ))}
        </Container>
      );
    } else {
      return <span />;
    }
  }
}

export default injectSheet(styles)(FastCooking);
