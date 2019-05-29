import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import MapView from 'react-native-maps';

class PickLocation extends Component {
  
  state = {
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: .0122,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * .0122
    },
    locationChosen: false
  }

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    }, 2000);
    this.setState({
      ...this.state,
      focusedLocation: {
        ...this.state.focusedLocation,
        latitude: coords.latitude,
        longitude: coords.longitude
      },
      locationChosen: true
    });
  }

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent: {
          coordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude          }
        }
      };
      this.pickLocationHandler(coordsEvent);
    },
    err => {
      alert('Failed! ' + err)
    })
  }

  render() {
    let marker;
    if(this.state.locationChosen){
      marker = <MapView.Marker coordinate={this.state.focusedLocation}/>;
    }
    return (
      <React.Fragment>
        <MapView 
        ref={ref => this.map = ref}
        initialRegion={this.state.focusedLocation}
        style={styles.map}
        onPress={this.pickLocationHandler}>
          {marker}
          </MapView>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={this.getLocationHandler} />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 250
  },
  button: {
    margin: 8
  },
  preview: { height: "100%", width: "100%" }
});

export default PickLocation;
