import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import injectSheet from 'react-jss';

import styles from './styles';

export class MapContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Map
        google={this.props.google}
        style={{width: '740px', height: '400px', position: 'relative'}}
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
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB60RMlfliecFnXM-SNDJj4QjNVdSymk4w'

})(injectSheet(styles)(MapContainer));


