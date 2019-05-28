import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {FONT_FAMILY, FONT_COLOR} from './globalConfig';

const MainText = props => (
  <Text {...props} style={[styles.mainText, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
  mainText: {
    fontFamily: FONT_FAMILY,
    color: FONT_COLOR
  }
});

export default MainText;