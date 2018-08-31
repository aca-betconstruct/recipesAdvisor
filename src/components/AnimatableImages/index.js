import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import styles from './styles';

const images = [
  'https://www.sprinklesandsprouts.com/wp-content/uploads/2016/04/Moroccan-Lamb-MeatballsFEATURE1.jpg',
  'https://ccc2017.files.wordpress.com/2016/09/cropped-photo-1446645681877-acde17e336a9.jpeg',
  'http://www.beleafvegan.com/images/slides/slide1.png',
  'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/17/3/WU0603H_Pepperoni-Pizza_s4x3.jpg.rend.hgtvcom.966.725.suffix/1433674887844.jpeg'
];

class AnimatableImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    const { index } = this.state;
    if (index !== images.length - 1) {
      setTimeout(() => this.setState({ index: index + 1 }), 7000);
    } else {
      setTimeout(() => this.setState({ index: 0 }), 7000);
    }
  }

  componentDidUpdate() {
    const { index } = this.state;
    if (index !== images.length - 1) {
      setTimeout(() => this.setState({ index: index + 1 }), 7000);
    } else {
      setTimeout(() => this.setState({ index: 0 }), 7000);
    }
  }

  render() {
    const { classes } = this.props;
    const { index } = this.state;
    return (
      <div className={classes.wrapper}>
        <div className={classes.opacity} />
        {images.map((image, i) => (
          <img
            src={image}
            key={i}
            alt={'Not Found'}
            className={`${classes.image} ${i !== index ? classes.dNone : ''}`}
          />
        ))}
      </div>
    );
  }
  static propTypes = {
    classes: PropTypes.object
  };
}

export default injectSheet(styles)(AnimatableImages);
