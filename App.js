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
import tajImage from './src/assets/taj.jpg'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail.js';

export default class App extends React.Component {

  state = {
    places: [],
    selectedPlace: null
  };



  onPlaceAdded = (placeName) => {
    this.setState(curState => ({
      places: curState.places.concat({
        name: placeName,
        key: Math.random().toString(),
        image: tajImage
      })
    }))
  }


  onItemSelected = (key) => {
    this.setState((curState => ({
      selectedPlace: curState.places.find(place => place.key === key)
    })))
  }

  onPlaceDeleted = () => {
    this.setState((curState => ({
      places: curState.places.filter(place => place.key != curState.selectedPlace.key),
      selectedPlace: null
    })))
  }

  onModalClosed = () => {
    this.setState({
      selectedPlace:  null
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail
         place={this.state.selectedPlace}
         onItemDeleted={this.onPlaceDeleted}
         onModalClosed={this.onModalClosed} />
        <PlacesInput onPlaceAdded={this.onPlaceAdded} />
        <PlacesList
          places={this.state.places}
          onItemSelected={this.onItemSelected} />
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