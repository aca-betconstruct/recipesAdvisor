import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './styles';

export class MapContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Map
        google={this.props.google}
        style={{ height: '400px', marginRight: '20px' }}
        className={`map ${classes.map}`}
        initialCenter={{
          lat: 40.2018202,
          lng: 44.4924011
        }}
        zoom={16}
      >
        <Marker name={'ACA'} position={{ lat: 40.2018202, lng: 44.4924011 }} />
      </Map>
    );
  }
  static propTypes = {
    classes: PropTypes.classes
  };
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB60RMlfliecFnXM-SNDJj4QjNVdSymk4w'
})(injectSheet(styles)(MapContainer));
