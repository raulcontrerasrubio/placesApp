import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default class AddPlace extends Component {

  state = {
    placeName: ''
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") return;
    this.setState({
      placeName: ''
    });
    this.props.placeSubmitHandler(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputPlace}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          title="Add"
          style={styles.buttonSubmitPlace}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputPlace: {
    width: "70%"
  },
  buttonSubmitPlace: {
    width: "30%"
  }
});
