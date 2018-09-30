/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';



// type Props = {};

import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlacesInput from './src/components/PlacesInput/PlacesInput.js';
import PlacesList from './src/components/PlacesList/PlacesList.js';

export default class App extends React.Component {

  state = {
    places: []
  };

  onPlaceAdded = (place) => {
    this.setState(currentState => ({
      places: currentState.places.concat(place)
    }))
  }

  render() {

    return (
      <View style={styles.container}>
        <PlacesInput onPlaceAdded={this.onPlaceAdded} />
        <PlacesList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});