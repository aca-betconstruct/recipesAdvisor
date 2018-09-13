import React from 'react';
import { Button } from 'mdbreact';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

import styles from './styles';

const ErrorPage = props => {
  const { classes, isAuth } = props;
  return (
    <div className={classes.wrapper}>
      <Link to={isAuth ? '/home' : '/'} className={classes.btn}>
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};

export default injectSheet(styles)(ErrorPage);
