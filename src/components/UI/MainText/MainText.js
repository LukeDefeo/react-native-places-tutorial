
import React from 'react'
import { StyleSheet, Text } from 'react-native';

//you can wrap other text elements in this and the styles cascade, but probably better to jsut have the styles as constants
//shared by other elements
export default (props) => {
  return (
    <Text style={styles.mainText}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  mainText: {
    color: "#eee"
  }
})
