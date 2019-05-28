import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {FONT_COLOR} from './globalConfig';


const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.input, props.style]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#eee',
    color: FONT_COLOR
  }
});

export default defaultInput;