import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import AddPlace from "./AddPlace";
import PlaceList from "./PlaceList";
import PlaceDetail from "./PlaceDetail";

export default class Places extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  currentKey = 0;

  placeSubmitHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: (++this.currentKey).toString(),
          name: placeName,
          image: {
            uri: "https://facebook.github.io/react/logo-og.png"
          }
        })
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: null,
        places: prevState.places.filter(
          place => place.key !== prevState.selectedPlace.key.toString()
        )
      };
    });
  };

  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalCloseHandler}
        />

        <AddPlace
          placeSubmitHandler={placeName => this.placeSubmitHandler(placeName)}
        />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
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
