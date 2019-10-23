import React, { Component } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";

class ValidatedTextInput extends Component {
  render() {
    const error = this.props.errors.find(e => e.target === this.props.name);

    return error ? (
      <View>
        <TextInput error {...this.props} style={styles.inputInvalid} />
        <Text>{error.message}</Text>
      </View>
    ) : (
      <TextInput {...this.props} style={styles.input} />
    );
  }
}

const styles = {
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 25
  },
  inputInvalid: {
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    margin: 25
  }
};

export default ValidatedTextInput;
