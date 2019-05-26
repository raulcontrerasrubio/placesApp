import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from './ListItem';

export default class List extends Component {

  render() {
    const placesOutput = this.props.places.map((place, index) => <ListItem key={index} placeName={place}/>)
    return (
      <View style={styles.listView}>
        {placesOutput}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    width: "100%",
  }
});