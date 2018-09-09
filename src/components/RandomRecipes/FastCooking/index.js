import React, { Component } from 'react';
import { Container } from 'mdbreact';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

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
            time: item.recipe.totalTime,
            name: item.recipe.label,
            uri: item.recipe.uri
          })
        )
      );
      recipe = recipe
        .sort((a, b) => {
          return a.time - b.time;
        })
        .filter(el => el.time !== 0);
      recipe.splice(6);
      this.setState({ recipes: recipe });
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
            margin: 'auto'
          }}
          className={classes.container}
        >
          {recipes.map((recipe, index) => (
            <SmallCard recipe={recipe} key={index} />
          ))}
        </Container>
      );
    } else {
      return null;
    }
  }
  static propTypes = {
    classes: PropTypes.object
  };
}

export default injectSheet(styles)(FastCooking);
