/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{flex:1}} placeholder='An awesome page' value={this.state.placeName} onChangeText={this.placeNameChangedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  }
});
