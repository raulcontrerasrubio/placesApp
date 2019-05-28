import React from 'react';
import {StyleSheet} from 'react-native';
import MainText from './MainText';

const h1 = props => (
  <MainText {...props} style={[styles.h1, props.style]}>{props.children}</MainText>
);

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
  }
});

export default h1;