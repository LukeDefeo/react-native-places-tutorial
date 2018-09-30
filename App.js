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
import { Platform, StyleSheet, Text, View, TextInput, Button, Slider } from 'react-native';
import ListItem from './src/components/ListItem/ListItem.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export class VerticalSlider extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Slider
          // backgroundColor="red"
          maximumValue={100}
          minimumValue={0}
          value={50}
          minimumTrackTintColor="black"
          style={{
            transform: [{ rotate: '90deg' }]
          }}
        />
        <Text>Hello</Text>
        <View style={{ flex: 1 }}>
          <Text>Hello</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Slider
            maximumValue={100}
            minimumValue={0}
            value={50}
            minimumTrackTintColor="black"
            style={{ transform: [{ rotate: '90deg' }] }} />
        </View>
        <View style={{ flex: 1 }}>
          <Text>Hello</Text>
        </View>
      </View>


    )
  }
}


export default class App extends React.Component {

  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = val => {
    console.log(val)
    this.setState({
      placeName: val
    })
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(currentState => {
      return {
        places: currentState.places.concat(currentState.placeName)
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, idx) => (
      <ListItem
        key={idx}
        placeName={place} />
    ));
 
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="A place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
            title="Add"
            style={styles.placeButtom}
            onPress={this.placeSubmitHandler}
          />
        </View>

        <View style={styles.listContainer}>
          {placesOutput}
        </View>
        {/* <VerticalSlider></VerticalSlider> */}

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    // justifyContent: 'flex-start',
    alignItems: 'center'
  },
  placeInput: {
    width: "80%",
    // borderColor: "black",
    // borderWidth: 1
  },
  placeButtom: {
    width: "30%"
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listContainer: {
    // backgroundColor: "red",
    // alignItems: "stretch"
    // flex: 1,
    width: "100%"
  }
});