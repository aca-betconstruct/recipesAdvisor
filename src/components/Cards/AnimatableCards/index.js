import React, { Component } from 'react';
import { Animation, Row, Col, Container } from 'mdbreact';

import { BigCard, MediumCard } from '..';

const recipes = [
  {
    image:
      'http://www.recipesaresimple.com/wp-content/uploads/2015/02/wester-chicken-chops-with-mushroom-sauce-recipe-300x300.jpg',
    animatable: false
  },
  {
    image:
      'https://theadventurebite.com/wp-content/uploads/Garlic-Herb-Roasted-Shrimp-with-Cocktail-Sauce-web-7-300x300.jpg'
  },
  {
    image:
      'https://theadventurebite.com/wp-content/uploads/Garlic-Herb-Roasted-Shrimp-with-Cocktail-Sauce-web-7-300x300.jpg',
    animatable: false
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxho3gczzvogjkwoX9kL8wMG0n5l838yNWOJ5zwqEVC9iYpmj0',
    animatable: false
  }
];

class AnimatableCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curIndex: 0,
      zoomOut: false,
      zoomIn: false
    };
  }

  handleClick = index => {
    const animationStart = new Promise(resolve =>
      resolve(this.setState({ zoomOut: true, zoomIn: false }))
    );
    animationStart.then(() => {
      console.log('a');
      setTimeout(
        () => this.setState({ curIndex: index, zoomOut: false, zoomIn: true }),
        550
      );
    });
  };

  render() {
    const { curIndex, zoomOut, zoomIn } = this.state;
    return (
      <Container style={{ width: '800px' }} className="mt-5">
        <div style={{ borderBottom: '1px solid #1aff8c' }}>
          <ul className="list-unstyled list-inline font-big responsive">
            <li
              className="list-inline-item pr-2 black-text"
              style={{ marginLeft: '60px' }}
            >
              <h3 className="black-text h3">Recent Added Recipes</h3>
            </li>
          </ul>
        </div>
        <Row style={{ marginTop: '25px' }}>
          {zoomOut ? (
            <Animation
              type={'zoomOutDown'}
              duration={'700ms'}
              className={`col-md-12 col-lg-6`}
            >
              <BigCard recipe={recipes[curIndex]} />
            </Animation>
          ) : zoomIn ? (
            <Animation
              type={'zoomInUp'}
              duration={'700ms'}
              className={'col-md-12 col-lg-6'}
            >
              <BigCard recipe={recipes[curIndex]} />
            </Animation>
          ) : (
            <Col md="12" lg="6">
              <BigCard recipe={recipes[curIndex]} />
            </Col>
          )}
          <Col md="12" lg="6">
            {recipes.map((item, index) => (
              <MediumCard
                image={item.image}
                key={index}
                onClick={() => this.handleClick(index)}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AnimatableCard;
