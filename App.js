/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AddPlace from './src/components/AddPlace/AddPlace';
import List from './src/components/List/List';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') return;

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ''
      };
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <AddPlace placeName={this.state.placeName} placeNameChangedHandler={(val) => this.placeNameChangedHandler(val)} placeSubmitHandler={()=>this.placeSubmitHandler()}/>
        <List places={this.state.places}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});
