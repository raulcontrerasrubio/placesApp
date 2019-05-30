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
    this.props.onPickLocation({
      latitude: coords.latitude,
      longitude: coords.longitude
    })
  }

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent: {
          coordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
        }
      };
      this.pickLocationHandler(coordsEvent);
    },
    err => {
      switch(err.code){
        case 1:
          alert('You must provide permission if you want to get your current position')
        break;
        case 2:
          alert('Your current position is unavailable. Please, enter it manually');
        break;
        case 3:
          alert('Error! Request Timeout');
        break;
        default:
          alert('Something failed while getting your location. Please, enter it manually')
        break;
      }
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
