
import React from 'react'
import { StyleSheet, Text } from 'react-native';

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
