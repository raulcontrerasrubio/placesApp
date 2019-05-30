import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import ImagePicker from 'react-native-image-picker';

class PickImage extends Component {
  state = {
    pickedImage: null
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({
      title: 'Pick an Image',
    },
    res => {
      if(res.didCancel){
        alert('User cancelled!');
      }else if(res.error){
        alert('Error '+JSON.stringify(res.error))
      }else{
        this.setState({
          ...this.state,
          pickedImage: {
            uri: res.uri
          }
        });
        this.props.onImagePicked({uri:res.uri, base64: res.data})
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.preview} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={this.pickImageHandler} />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  preview: { height: "100%", width: "100%" }
});

export default PickImage;
