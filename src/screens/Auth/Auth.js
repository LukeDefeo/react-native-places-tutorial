import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import {startTabs} from '../MainTabs/startMainTabs'
export default class AuthScreen extends Component {

  loginHandler = () => {
    startTabs()
  }

  render() {
    return (
      <View>
          <Text>Auth Screen</Text>
          <Button onPress={this.loginHandler} title="Login"/>
      </View>
    );
  }
}
