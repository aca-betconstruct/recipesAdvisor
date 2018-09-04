import React, { Component } from 'react';
//import { Tabs, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';

import FoodPreferences from '../FoodPreferences';
import styles from './styles';
import injectSheet from 'react-jss';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePreferencesChange = this.handlePreferencesChange.bind(this);
  }

  handlePasswordChange(changes) {
    console.log(changes);
    const { newPassword, coPassword } = changes;
    if (newPassword !== coPassword) {
      this.setState({
        hasError: true
      });
    }
  }

  handlePreferencesChange() {}

  render() {
    const { classes } = this.props;
    const { hasError } = this.state;
    return (
      <div className={classes.settings}>
        {/*<h1 className={classes.title}>Settings</h1>*/}
        {/*<Tabs defaultActiveKey={1} id={'settingsTabs'} className={classes.tabs}>*/}
        {/*<Tab eventKey={1} title={'Change Password'}>*/}
        {/*<ChangePassword*/}
        {/*onSubmit={this.handlePasswordChange}*/}
        {/*hasError={hasError}*/}
        {/*/>*/}
        {/*</Tab>*/}
        {/*<Tab eventKey={2} title={'Change Preferences'}>*/}
        {/*<FoodPreferences />*/}
        {/*</Tab>*/}
        {/*</Tabs>*/}
      </div>
    );
  }
  static propTypes = {
    classes: PropTypes.object
  };
}

export default injectSheet(styles)(Settings);
