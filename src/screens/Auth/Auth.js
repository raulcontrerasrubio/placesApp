import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput';
import DefaultButton from '../../components/UI/DefaultButton';
import H1 from '../../components/UI/H1';
import MainText from '../../components/UI/MainText';

import bgImage from '../../assets/background.jpg';

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTabs();
  }

  render() {
    return (
        <ImageBackground source={bgImage} style={styles.bgImage}>
      <View style={styles.container}>
        <H1>Please Log In</H1>
        <MainText>Hello world!</MainText>
        <DefaultButton title="Switch to Login" onPress={this.loginHandler} backgroundColor="#29aaf4"/>
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Your email address"/>
          <DefaultInput placeholder="Password"/>
          <DefaultInput placeholder="Confirm password"/>
        </View>
        <DefaultButton title="Login" onPress={this.loginHandler} backgroundColor="#29aaf4"/>
      </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    width: '80%'
  },
  bgImage: {
    width: '100%',
    flex:1
  }
})

export default AuthScreen;