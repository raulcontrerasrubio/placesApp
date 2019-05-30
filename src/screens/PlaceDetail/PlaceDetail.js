import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MapView from 'react-native-maps';
import { connect } from "react-redux";
import { deletePlace } from "../../store/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

class PlaceDetailScreen extends Component {

  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount(){
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      ...this.state,
      viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
    });
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop()
  }

  getStyles = () => {
    return this.state.viewMode === 'portrait' ? portraitStyles : landscapeStyles;
  }

  render() {
    const styles = this.getStyles();
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={this.props.selectedPlace.image} style={styles.image}/>
        </View>
        <View style={styles.imageContainer}>
          <MapView style={styles.image} initialRegion={{
            ...this.props.selectedPlace.location,
            latitudeDelta: .0122,
            longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * .0122
          }}>
            <MapView.Marker coordinate={this.props.selectedPlace.location}/>
          </MapView>
        </View>
        <View style={styles.actionBox}>
          <Text style={styles.text}>{this.props.selectedPlace.name}</Text>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <Icon size={30} name={Platform.OS === 'android' ? 'md-trash' : "ios-trash"} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const portraitStyles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  image: {
    width: "100%",
    height: 200
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 32,
    marginBottom: 10
  },
  actionBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  }
});
const landscapeStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: "100%",
    height: '100%'
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 32,
    marginBottom: 10,
  },
  actionBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetailScreen);
