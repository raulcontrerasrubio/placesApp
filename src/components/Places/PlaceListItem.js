import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PlaceListItem = (props) => {
  return (
  <TouchableOpacity onPress={props.onItemPress}>
    <View style={styles.PlaceListItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  PlaceListItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5
  }
})

export default PlaceListItem;