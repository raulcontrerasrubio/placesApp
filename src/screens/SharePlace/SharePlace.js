import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AddPlace from '../../components/Places/AddPlace';
import {connect} from 'react-redux';
import {addPlace} from '../../store/actions/index';

class SharePlaceScreen extends Component{

  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  }

  render(){
    return (
      <View>
        <AddPlace onPlaceAdded={this.placeAddedHandler}/>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName)),
  }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);