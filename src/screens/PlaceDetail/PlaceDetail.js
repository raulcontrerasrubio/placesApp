import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { deletePlace } from "../../store/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

class PlaceDetailScreen extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.image} />
          <Text style={styles.text}>{this.props.selectedPlace.name}</Text>
        </View>
        <View style={styles.actionBox}>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <Icon size={30} name={Platform.OS === 'android' ? 'md-trash' : "ios-trash"} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetailScreen);
