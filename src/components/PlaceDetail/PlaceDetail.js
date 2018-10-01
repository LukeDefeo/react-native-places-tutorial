
import React from 'react'
import { Modal, Image, Text, Button, StyleSheet, View } from 'react-native';

export default props => {
  let modalContent = null
  if (props.place) {
    modalContent = (
      <View>
        <Image source={props.place.image} style={styles.image}/>
        <Text style={styles.name}>{props.place.name}</Text>
      </View>);
  }

  return (
    <Modal visible={props.place != null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="delete" color="red"  onPress={props.onItemDeleted}/>
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
  }
})