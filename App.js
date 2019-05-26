/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Places from "./src/components/Places/Places";
import {View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.centeredComponent}>
        <Places/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredComponent: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  }
})