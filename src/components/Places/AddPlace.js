import React, { Component } from "react";
import DefaultInput from "../UI/DefaultInput";

export default class AddPlace extends Component {
  render() {
    return (
      <DefaultInput
        placeHolder="Place Name"
        value={this.props.placeName}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}
