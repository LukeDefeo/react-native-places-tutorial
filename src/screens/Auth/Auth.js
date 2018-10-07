import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { startTabs } from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import MainText from '../../components/UI/MainText/MainText'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
export default class AuthScreen extends Component {

  loginHandler = () => {
    startTabs()
  }

  render() {
    return (
      <View style={styles.container}>
        <HeadingText>Please log in</HeadingText>
        <Button title="Swith to login" />
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="email" style={styles.style} />
          <DefaultInput placeholder="password" style={styles.style}/>
          <DefaultInput placeholder="confirm password" style={styles.style}/>
        </View>

        <Button onPress={this.loginHandler} title="Login22" />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  input: {
    borderWidth: 1,
    borderColor: "#eee"
  },
  inputContainer: {
    width: "80%"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
