import React, { Component } from 'react';
import injectSheet from 'react-jss';

import styles from './styles';

import { Link } from 'react-router-dom';
import { Tooltip } from 'mdbreact';

class ProfileSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleChange = event => {
    if (
      event.target.innerText.length < 16 ||
      event.target.innerText === 'DAILY' ||
      event.target.innerText === 'DIET'
    ) {
      this.props.category(event.target.innerText);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sideBar}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Link to="/home">
            <Tooltip
              placement="right"
              componentClass={classes.button}
              tag="div"
              component="button"
              tooltipContent="
          This is your default page.Here you can see your daily recipes
          which are offered to you based on your preferences. This list
          will automatically update every day"
            >
              Daily Recipes
            </Tooltip>
          </Link>

          <Link to="/">
            <Tooltip
              placement="right"
              componentClass={classes.button}
              tag="div"
              component="button"
              tooltipContent="
                Click here if you want to discover new stuff and refresh your list of favourite recipes. We offer all kinds of
                foods and drinks in this section, both covering the basics and the ones you want to keep for impressing your precious guests."
            >
              Discover Recipes
            </Tooltip>
          </Link>

          <Link to="/home/favourites">
            <Tooltip
              placement="right"
              componentClass={classes.button}
              tag="div"
              component="button"
              tooltipContent="You will have all your favourite recipes in here, choose the
                ones you like from our database and we will collect them here,
                so you never have to scroll the recipes to find them again"
            >
              Favourite Recipes
            </Tooltip>
          </Link>

          <Link to="/calculator">
            <Tooltip
              placement="right"
              componentClass={classes.button}
              tag="div"
              component="button"
              tooltipContent="Calculate the amount of calories that is an optimum for you,
                based on your physical stats, and get recipes that will help you
                to stay focused on your numbers`"
            >
              Calculator
            </Tooltip>
          </Link>

          <Link to="/home/preferences">
            <Tooltip
              placement="right"
              componentClass={classes.button}
              tag="div"
              component="button"
              tooltipContent="Decided to refresh the food preferences ? Click here and update the list to get new recipes on your page"
            >
              Preferences
            </Tooltip>
          </Link>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(ProfileSidebar);
