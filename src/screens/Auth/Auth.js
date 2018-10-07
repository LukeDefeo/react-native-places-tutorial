import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native'
import { startTabs } from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import MainText from '../../components/UI/MainText/MainText'
import BackGroundImage from '../../assets/background.jpg'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
export default class AuthScreen extends Component {

  loginHandler = () => {
    startTabs()
  }

  switchToLoginHandler = () => {

  }

  render() {
    return (
      <ImageBackground style={styles.backGroundImage} source={BackGroundImage}>
        <View style={styles.container}>

          <HeadingText>Please log in</HeadingText>
          <ButtonWithBackground onPress={this.switchToLoginHandler} color="#29aaf4">"Swith to login"</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="email" style={styles.style} />
            <DefaultInput placeholder="password" style={styles.style} />
            <DefaultInput placeholder="confirm password" style={styles.style} />
          </View>

          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler} >Login</ButtonWithBackground>

        </View>
      </ImageBackground >

    );
  }
}

const styles = StyleSheet.create({
  backGroundImage: {
    width: "100%",
    flex: 1
  },
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
