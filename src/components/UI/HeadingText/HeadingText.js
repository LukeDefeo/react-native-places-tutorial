import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default (props) => {
  return (
    <Text {...props} style={[styles.textHeading, props.style]}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  }
})
