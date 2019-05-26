import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import AddPlace from "./AddPlace";
import PlaceList from "./PlaceList";

// import placeImage from '../../assets/nature.jpg';

export default class Places extends Component {
  state = {
    places: []
  };

  placeSubmitHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName,
          image: {
            uri: 'https://facebook.github.io/react/logo-og.png'
          }
        })
      };
    });
  };

  placeDeletedHandler = id => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => place.key !== id.toString())
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AddPlace
          placeSubmitHandler={placeName => this.placeSubmitHandler(placeName)}
        />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
