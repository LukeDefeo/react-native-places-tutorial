
import React, { Component } from 'react'
import { Modal, Image, Text, Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { } from 'redux'
import { deletePlace } from '../../store/actions/index'

class PlaceDetail extends Component {

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.place.key)
    //react native navigation is not managed by redux
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.place.image} style={styles.image} />
          <Text style={styles.name}>{this.props.place.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="blue" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  image: {
    height: 200,
    width: "100%"
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
})


const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail)