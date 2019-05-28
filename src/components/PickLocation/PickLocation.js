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
    }
  }

  render() {
    return (
      <React.Fragment>
        <MapView 
        initialRegion={this.state.focusedLocation}
        style={styles.map}/>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={() => alert("Pick Location!")} />
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
