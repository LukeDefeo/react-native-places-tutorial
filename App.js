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
import {Platform, StyleSheet, Text, View, TextInput, Button, Slider } from 'react-native';

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
            height: 300,
            width:  300,
            transform: [{ rotate: '90deg' }]
          }}
        />
        <Text>Hello</Text>
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
    const placesOutput = this.state.places.map((place, idx) => <Text key={idx}>{place} </Text>);
    return (
      <View style={styles.container}>
        {/* <View style={styles.inputContainer}>
          <TextInput
            style={{ width: 300, borderColor: "black", borderWidth: 1 }}
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



        <View>
          {placesOutput}
        </View> */}
        <VerticalSlider></VerticalSlider>

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
    justifyContent: 'flex-start',
    // alignItems: 'flex-start'
  },
  placeButtom: {

  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});


// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
