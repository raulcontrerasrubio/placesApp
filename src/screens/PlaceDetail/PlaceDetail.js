import React from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const PlaceDetailScreen = props => (
  <View style={styles.container}>
    <View>
      <Image source={props.selectedPlace.image} style={styles.image} />
      <Text style={styles.text}>{props.selectedPlace.name}</Text>
    </View>
    <View style={styles.actionBox}>
      <TouchableOpacity onPress={props.onItemDeleted}>
        <Icon size={30} name="ios-trash" color="red" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  image: {
    width: "100%",
    height: 200
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 32
  },
  actionBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15
  }
});

export default PlaceDetailScreen;
