import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AddPlace from './AddPlace';
import PlaceList from './PlaceList';

export default class Place extends Component {

  state = {
    places: []
  };

  placeSubmitHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AddPlace
          placeSubmitHandler={(placeName) => this.placeSubmitHandler(placeName)}
        />
        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff"
  }
});