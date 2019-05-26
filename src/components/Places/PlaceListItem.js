import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PlaceListItem = (props) => {
  return (
  <View style={styles.PlaceListItem}>
    <Text>{props.placeName}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  PlaceListItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    margin: 5
  }
})

export default PlaceListItem;