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

  onPlaceAdded = (placeName) => {
    this.setState(curState => ({
      places: curState.places.concat({
        name: placeName,
        key: Math.random().toString()
      })
    }))
  }

  onItemDeleted = (key) => {
    this.setState((curState => ({
      places: curState.places.filter(place => place.key != key)
    })))
  }

  render() {

    return (
      <View style={styles.container}>
        <PlacesInput onPlaceAdded={this.onPlaceAdded} />
        <PlacesList
          places={this.state.places}
          onItemDeleted={this.onItemDeleted} />
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