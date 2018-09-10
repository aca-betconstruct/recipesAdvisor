import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import styles from './styles';

const images = [
  'http://www.kegworthhotel.co.uk/wp-content/uploads/2015/02/breakfast2_4-1000x267.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/T2_OictIsWjYdeLLuDphZQ/o.jpg',
  'http://www.kegworthhotel.co.uk/wp-content/uploads/2015/05/pasta-1000x267.jpg',
  'http://www.kegworthhotel.co.uk/wp-content/uploads/2015/02/leisure7_4-1000x267.jpg'
];

class AnimatableImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }
  timer = () => {
    const index = this.state.index;
    this.setState({ index: (index + 1) % 4 });
  };

  componentDidMount() {
    this.timeout = setInterval(this.timer, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
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
