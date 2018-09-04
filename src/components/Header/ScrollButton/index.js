import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Button, Fa } from 'mdbreact';
import styles from './styles';

class ScrollButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0
    };

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollStep() {
    const { scrollStepInPx } = this.props;
    const { intervalId } = this.state;
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  }

  scrollToTop() {
    const { delayInMs } = this.props;
    let intervalId = setInterval(this.scrollStep.bind(this), delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    const { classes } = this.props;
    return (
      <Button
        className={`${classes.btn} ${
          window.scrollY < 300 ? classes.dNone : ''
        }`}
        title={'Back to top'}
        color={'elegant'}
        onClick={this.scrollToTop}
      >
        <Fa className={classes.icon} icon={'angle-up'} size={'lg'} />
      </Button>
    );
  }
  static propTypes = {
    classes: PropTypes.object,
    delayInMs: PropTypes.number,
    scrollStepInPx: PropTypes.number
  };
}

export default injectSheet(styles)(ScrollButton);
