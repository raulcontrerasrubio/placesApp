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
    styles: {
      pwContainerDirection: "column",
      pwContainerJustifyContent: "flex-start",
      pwWrapperWidth: "100%"
    }
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", dims => {
      this.setState({
        ...this.state,
        styles: {
          pwContainerDirection: Dimensions.get("window").height > 500
            ? "column"
            : "row",
          pwContainerJustifyContent: Dimensions.get("window").height > 500
            ? "flex-start"
            : "space-between",
          pwWrapperWidth: Dimensions.get("window").height > 500 ? "100%" : "45%"
        }
      });
    });
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    let headingText = null;
    if (Dimensions.get("window").height > 500) {
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
            <View
              style={{
                flexDirection: this.state.styles.pwContainerDirection,
                justifyContent: this.state.styles.pwContainerJustifyContent
              }}
            >
              <View
                style={{
                  width: this.state.styles.pwWrapperWidth
                }}
              >
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
  }
});

export default AuthScreen;
