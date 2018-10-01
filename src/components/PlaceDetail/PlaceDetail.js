
import React from 'react'
import { Modal, Image, Text, Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
export default props => {
  let modalContent = null
  if (props.place) {
    modalContent = (
      <View>
        <Image source={props.place.image} style={styles.image} />
        <Text style={styles.name}>{props.place.name}</Text>
      </View>);
  }

  return (
    <Modal visible={props.place != null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
          <Button title="close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
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