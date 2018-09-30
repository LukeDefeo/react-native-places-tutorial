import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

export default class PlacesInput extends Component {

  state = {
    placeName: ''
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  }
  render() {
    return (
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

    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "80%",
    // borderColor: "black",
    // borderWidth: 1
  },
  placeButtom: {
    width: "30%"
  }
});