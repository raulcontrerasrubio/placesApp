import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";

import placeholder from "../../assets/nature.jpg";
class PickImage extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.placeholder}>
          <Image source={placeholder} style={styles.preview} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={() => alert("Pick Image!")} />
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

export default PickImage;
