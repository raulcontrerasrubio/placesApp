import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import PlaceListItem from "./PlaceListItem";

export default class PlaceList extends Component {
  render() {
    return (
      <FlatList
        style={styles.placesList}
        data={this.props.places}
        renderItem={(info) => (
          <PlaceListItem
            placeName={info.item.name}
            placeImage={info.item.image}
            onItemPress={() => this.props.onItemDeleted(info.item.key)}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  placesList: {
    width: "100%"
  }
});
