import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './styles';
import { Link } from 'react-router-dom';

const activities = [
  'Sedentary lifestyle',
  'Slightly active',
  'Moderately active',
  'Active lifestyle',
  'Very active lifestyle'
];
const genders = ['male', 'female'];
const activityDescriptions = [
  'Little to no exercise',
  'Intensive exercise for at least 20 minutes 1 to 3 times per week. This may include such things as bicycling, jogging, basketball, swimming, skating, etc.  If you do not exercise regularly, but you maintain a busy life style that requires you to walk frequently for long periods, you meet the requirements of this level.,',
  'Intensive exercise for at least 30 to 60 minutes 3 to 4 times per week. Any of the activities listed above will qualify',
  'Intensive exercise for 60 minutes or greater 5 to 7 days per week (see sample activities above).  Labor-intensive occupations also qualify for this level.  Labor-intensive occupations include construction work (brick laying, carpentry, general labor, etc.). Also farming, landscape worker or similar occupations.',
  'Exceedingly active and/or very demanding activities:  Examples include:  athlete with an almost unstoppable training schedule with multiple training sessions throughout the day or a very demanding job, such as shoveling coal or working long hours on an assembly line. Generally, this level of activity is very difficult to achieve.'
];

class CaloriesCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageInYears: 0,
      heightInCentimeters: 0,
      weightInKilograms: 0,
      activity: 'Sedentary lifestyle',
      activityDescription: 0,
      gender: 'male',
      isReady: false
    };

    this.handleHeightInputChange = this.handleHeightInputChange.bind(this);
    this.handleWeightInputChange = this.handleWeightInputChange.bind(this);
    this.handleActivitiesSelectorChange = this.handleActivitiesSelectorChange.bind(
      this
    );
    this.handleGenderSelectorChange = this.handleGenderSelectorChange.bind(
      this
    );
    this.handleAgeInputChange = this.handleAgeInputChange.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
  }

  handleActivitiesSelectorChange(event) {
    const ind = activities.indexOf(event.target.value);
    this.setState({
      activity: event.target.value,
      activityDescription: ind
    });
    console.log('Activity level ' + this.state.activity);
  }

  handleGenderSelectorChange(event) {
    this.setState({ gender: event.target.value });
    console.log('Gender ' + this.state.gender);
  }

  handleAgeInputChange(event) {
    this.setState({ ageInYears: event.target.value });
    console.log('Age is ' + this.state.ageInYears);
  }

  handleWeightInputChange(event) {
    this.setState({ weightInKilograms: event.target.value });
    console.log('weight is ' + this.state.weightInKilograms);
  }

  handleHeightInputChange(event) {
    this.setState({ heightInCentimeters: event.target.value });
    console.log('weight is ' + this.state.heightInCentimeters);
  }

  handleCalculation(event) {
    event.preventDefault();
    const {
      gender,
      ageInYears,
      weightInKilograms,
      heightInCentimeters
    } = this.state;
    const { changeCalories } = this.props;
    let bmr;
    switch (this.state.activity) {
      case 'Sedentary lifestyle':
        bmr = 1.2;
        break;
      case 'Slightly active':
        bmr = 1.375;
        break;
      case 'Moderately active':
        bmr = 1.55;
        break;
      case 'Active lifestyle':
        bmr = 1.7;
        break;
      case 'Very active lifestyle':
        bmr = 1.9;
        break;
      default:
        break;
    }

    if (gender === 'male') {
      changeCalories(
        (10 * weightInKilograms +
          6.25 * heightInCentimeters -
          5 * ageInYears +
          5) *
          bmr
      );
    } else {
      changeCalories(
        (10 * weightInKilograms +
          6.25 * heightInCentimeters -
          5 * ageInYears -
          161) *
          bmr
      );
    }

    this.setState({ isReady: true });
  }

  render() {
    const { classes, assignResults, valid } = this.props;
    const { activityDescription, isReady } = this.state;
    let caloriesMessage = '';
    let weightLossMessage = '';
    if (isReady === true) {
      caloriesMessage = `your amount of daily calories is  ${
        assignResults.calories
      }`;
      weightLossMessage = `if you want to loose weight don't consume more than 
        ${assignResults.wls}`;
    }
    return (
      <div>
        <h1 className={classes.welcome}>
          Please Fill In The Form To Calculate The Calories
        </h1>
        <div className={classes.boxWrap}>
          <div className={classes.boxLeft}>
            <div className={classes.formsBox}>
              <form onSubmit={this.handleCalculation}>
                <div>
                  <h2>Your activity level</h2>
                  <select
                    className={classes.selector}
                    value={this.state.activity}
                    onChange={this.handleActivitiesSelectorChange}
                  >
                    {activities.map((value, index) => (
                      <option
                        key={index}
                        value={value}
                        className={classes.option}
                      >
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <h2>Gender</h2>
                  <select
                    className={classes.selector}
                    value={this.state.gender}
                    onChange={this.handleGenderSelectorChange}
                  >
                    {genders.map((value, index) => (
                      <option
                        className={classes.option}
                        key={index}
                        value={value}
                      >
                        <p>{value}</p>
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <h2>Age</h2>
                  <input
                    className={classes.textInput}
                    type="number"
                    min="12"
                    max="120"
                    onChange={this.handleAgeInputChange}
                  />
                </div>
                <div>
                  <h2>Weight in kgs</h2>
                  <input
                    className={classes.textInput}
                    type="number"
                    min="30"
                    max="400"
                    onChange={this.handleWeightInputChange}
                  />
                </div>
                <div className>
                  <h2>Height in cms</h2>
                  <input
                    className={classes.textInput}
                    type="number"
                    min="100"
                    max="250"
                    onChange={this.handleHeightInputChange}
                  />
                </div>
                <button className={classes.button} type="submit">
                  Calculate
                </button>
                <Link className={classes.button} to="/home">
                  go back
                </Link>
              </form>
            </div>
          </div>
          <div className={classes.boxRight}>
            <div className={classes.contentLeft}>
              <div className={classes.contentInfo}>
                <h2> Is this your level ?</h2>
                <div className={classes.slider}>
                  <div className={classes.callbacksContainer}>
                    <ul
                      className={`${classes.rslides} ${classes.callbacks}`}
                      id="slider4"
                    >
                      <li>
                        <div className={classes.descriptionBanner}>
                          <p>
                            <p className={classes.result}>
                              {activityDescriptions[activityDescription]}
                            </p>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className={classes.descriptionBanner}>
                          <h2>What You Do ?</h2>
                          <p>{caloriesMessage}</p>
                          <p>{weightLossMessage}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes.signIn} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  static propTypes = {
    classes: PropTypes.object,
    changeCalories: PropTypes.func
  };
}

export default injectSheet(styles)(CaloriesCalculator);
