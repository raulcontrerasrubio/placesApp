import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {FONT_COLOR} from './globalConfig';


const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    placeholderTextColor="#333"
    {...props}
    style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]}
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
    color: FONT_COLOR,
  },
  invalid: {
    backgroundColor: '#f9c0c0',
    borderColor: 'red'
  }
});

export default defaultInput;