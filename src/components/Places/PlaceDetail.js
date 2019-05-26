import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const placeDetail = props => (
  <Modal visible={props.selectedPlace !== null} animationType='slide' onRequestClose={props.onModalClosed}>
    <View style={styles.modalContainer}>
      {props.selectedPlace ? (
        <View>
          <Image source={props.selectedPlace.image} style={styles.image}/>
          <Text style={styles.text}>{props.selectedPlace.name}</Text>
        </View>
      ) : null}
      <View style={styles.actionBox}>
        <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
        <Button title="Close" onPress={props.onModalClosed}/>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 32
  },
  actionBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15
  }
});

export default placeDetail;
