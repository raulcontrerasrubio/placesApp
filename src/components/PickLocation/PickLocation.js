import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class PickLocation extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={() => alert("Pick Location!")} />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  preview: { height: "100%", width: "100%" }
});

export default PickLocation;
