import React from "react";
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet
} from "react-native";
import MainText from "./MainText";

const DefaultButton = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.backgroundColor }]}>
      <MainText>{props.title}</MainText>
    </View>
  );

  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black"
  }
});

export default DefaultButton;
