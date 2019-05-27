import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import AddPlace from "./AddPlace";
import PlaceList from "./PlaceList";
import PlaceDetail from "./PlaceDetail";
import {connect} from 'react-redux';
import {addPlace, deletePlace, selectPlace, deselectPlace} from '../../store/actions/index';

class Places extends Component {

  placeSubmitHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  placeDeletedHandler = key => {
    this.props.onDeletePlace(key)
  };

  modalCloseHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalCloseHandler}
        />

        <AddPlace
          placeSubmitHandler={placeName => this.placeSubmitHandler(placeName)}
        />
        <PlaceList
          places={this.props.places}
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


const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName)),
    onDeletePlace: (key) => dispatch(deletePlace(key)),
    // onSelectPlace: (key) => dispatch(selectPlace(key)),
    // onDeselectPlace: () => dispatch(deselectPlace()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Places);