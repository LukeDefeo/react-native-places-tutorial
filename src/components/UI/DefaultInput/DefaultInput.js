import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default (props) => {
  return (
    <TextInput
      {...props} //this distributes  props from parent to this text input
      style={[styles.input, props.style]} 
      //since style can be in the props we want to merge them with the defualt styles here
      //you can pass an array of styles to style and they get merged right to left.
      //you can even sent a array of styles from the parent and it will work despite being nested here
       />
  )
}

const styles = StyleSheet.create({

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 8,

  }
})
