import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";
import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput";
import DefaultButton from "../../components/UI/DefaultButton";
import H1 from "../../components/UI/H1";

import bgImage from "../../assets/background.jpg";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount(){
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      ...this.state,
      viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
    });
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    let headingText = null;
    if (this.state.viewMode === 'portrait') {
      headingText = <H1>Please Log In</H1>;
    }

    return (
      <ImageBackground source={bgImage} style={styles.bgImage}>
        <View style={styles.container}>
          {headingText}
          <DefaultButton
            title="Switch to Login"
            onPress={this.loginHandler}
            backgroundColor="#29aaf4"
          />
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your email address" />
            <View style={this.state.viewMode === 'portrait' ? styles.portraitPasswordContainer : styles.landscapePasswordContainer}>
              <View style={this.state.viewMode === 'portrait' ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                <DefaultInput placeholder="Password" />
              </View>
              <View style={styles.formGroup}>
                <DefaultInput placeholder="Confirm password" />
              </View>
            </View>
          </View>
          <DefaultButton
            title="Login"
            onPress={this.loginHandler}
            backgroundColor="#29aaf4"
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    width: "80%"
  },
  bgImage: {
    width: "100%",
    flex: 1
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordWrapper: {
    width: "100%"
  },
});

export default AuthScreen;
