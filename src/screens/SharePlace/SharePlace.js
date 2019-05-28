import React, { Component } from "react";
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { addPlace } from "../../store/actions/index";
import H1 from "../../components/UI/H1";
import AddPlace from "../../components/Places/AddPlace";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    placeName: ''
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  placeNameChangeHandler = placeName => {
    this.setState({
      ...this.state,
      placeName: placeName
    });
  }
  
  placeAddedHandler = () => {
    if(this.state.placeName.trim() === '') return;
    this.props.onAddPlace(this.state.placeName);
    this.setState({
      ...this.state,
      placeName: ''
    })
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <H1>Share a place with us!</H1>
          <PickImage/>
          <PickLocation/>
          <AddPlace placeName={this.state.placeName} onChangeText={this.placeNameChangeHandler}/>
          <View style={styles.button}>
            <Button title="Share the place!" onPress={this.placeAddedHandler} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  preview: { height: "100%", width: "100%" }
});

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
