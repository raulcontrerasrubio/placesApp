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
import validate from "../../utility/validation";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        }
      }
    }
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      ...this.state,
      viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    });
  };

  updateInputState = (key, value) => {
    let connectedValue = {},
      equalControl,
      equalValue;
    if (this.state.controls[key].validationRules.equalTo) {
      equalControl = this.state.controls[key].validationRules.equalTo;
      equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        ...prevState,
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls[key].validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            )
          }
        }
      };
    });
  };

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    let headingText = null;
    if (this.state.viewMode === "portrait") {
      headingText = <H1 style={styles.input}>Please Log In</H1>;
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
            <DefaultInput
              placeholder="Your email address"
              style={styles.input}
              value={this.state.controls.email.value}
              onChangeText={val => this.updateInputState("email", val)}
            />
            <View
              style={
                this.state.viewMode === "portrait"
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder="Password"
                  style={styles.input}
                  value={this.state.controls.password.value}
                  onChangeText={val => this.updateInputState("password", val)}
                />
              </View>
              <View style={styles.formGroup}>
                <DefaultInput
                  placeholder="Confirm password"
                  style={styles.input}
                  value={this.state.controls.confirmPassword.value}
                  onChangeText={val =>
                    this.updateInputState("confirmPassword", val)
                  }
                />
              </View>
            </View>
          </View>
          <DefaultButton
            title="Submit"
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
  input: {
    color: "#eee"
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
  }
});

export default AuthScreen;
