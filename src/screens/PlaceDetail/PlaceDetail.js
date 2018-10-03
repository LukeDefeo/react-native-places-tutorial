
import React from 'react'
import { Modal, Image, Text, Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default props => {

  return (

    <View style={styles.container}>
      <View>
        <Image source={props.place.image} style={styles.image} />
        <Text style={styles.name}>{props.place.name}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={props.onItemDeleted}>
          <View style={styles.deleteButton}>
            <Icon size={30} name="ios-trash" color="blue" />
          </View>
        </TouchableOpacity>
      </View>
    </View>

  )
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