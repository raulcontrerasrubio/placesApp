import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PlaceListItem from "./PlaceListItem";

export default class PlaceList extends Component {


  render() {
    const placesOutput = this.props.places.map((place, index) => (
      <PlaceListItem key={index} placeName={place} onItemPress={() => this.props.onItemDeleted(index)}/>
    ));
    return <View style={styles.placesList}>{placesOutput}</View>;
  }
}

const styles = StyleSheet.create({
  placesList: {
    width: "100%"
  }
});
