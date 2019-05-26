import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default class AddPlace extends Component {

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="An awesome place"
          value={this.props.placeName}
          onChangeText={this.props.placeNameChangedHandler}
        />
        <Button
          title="Add"
          style={styles.button}
          onPress={this.props.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "70%"
  },
  button: {
    width: "30%"
  }
});
