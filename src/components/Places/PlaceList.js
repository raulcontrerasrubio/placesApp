import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import PlaceListItem from "./PlaceListItem";

export default class PlaceList extends Component {

  renderItem = (info) => {
    return (
      <PlaceListItem
            placeName={info.item.name}
            placeImage={info.item.image}
          />
    )
  }

  getItemLayout = (data, index) => (
    {length: 50, offset: 50*index , index}
  );

  render() {
    return (
      <FlatList
        style={styles.placesList}
        data={this.props.places}
        renderItem={this.renderItem}
        getItemLayout={this.getItemLayout}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={10}
      />
    );
  }
}

const styles = StyleSheet.create({
  placesList: {
    width: "100%"
  }
});
