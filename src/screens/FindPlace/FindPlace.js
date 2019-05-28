import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Animated } from "react-native";
import { connect } from "react-redux";
import PlaceList from "../../components/Places/PlaceList";

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    placesLoaded: false,
    removeAnimation: new Animated.Value(1),
    showPlacesAnimation: new Animated.Value(0)
  };

  static navigatorStyle = {
    navBarButtonColor: "orange"
  };

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };
  itemSelectedHandler = key => {
    const selectedPlace = this.props.places.find(place => {
      return place.key === key;
    });

    this.props.navigator.push({
      screen: "placesApp.PlaceDetailScreen",
      title: selectedPlace.name,
      passProps: {
        selectedPlace: selectedPlace
      }
    });
  };

  placesSearchHandler = () => {
    Animated.timing(this.state.removeAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.setState({
        placesLoaded: true
      }, () => this.placesLoadedHandler());
    });
  };

  placesLoadedHandler = () => {
    Animated.timing(this.state.showPlacesAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  render() {
    let content = this.state.placesLoaded ? (
      <Animated.View style={
        {
          opacity: this.state.showPlacesAnimation
        }
      }>
        <PlaceList
        places={this.props.places}
        onItemSelected={this.itemSelectedHandler}
      />
      </Animated.View>
    ) : (
      <Animated.View style={{
        opacity: this.state.removeAnimation,
        transform: [
          {
            scale: this.state.removeAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [12, 1]
            })
          }
        ]
      }}>
        <TouchableOpacity onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find Places</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
    return (
      <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  listContaner: {},
  searchButton: {
    borderColor: "orange",
    borderWidth: 3,
    borderRadius: 15,
    padding: 20
  },
  searchButtonText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 16
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
