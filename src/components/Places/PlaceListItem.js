import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PlaceListItem = (props) => {
  return (
  <TouchableOpacity onPress={props.onItemPress}>
    <View style={styles.PlaceListItem}>
      <Image style={styles.placeImage} source={props.placeImage} resizeMode='cover'/>
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
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    height: 30,
    marginRight: 8,
    width: 30,
  }
})

export default PlaceListItem;