import React, { Component } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import PropTypes from "prop-types";

class ValidatedTextInput extends Component {
  render() {
    const { errors = [] } = this.props;
    const error = errors.find(e => e.target === this.props.name);

    return (
      <View>
        <TextInput
          error={!!error}
          {...this.props}
          style={error ? styles.inputInvalid : styles.input}
        />
        <Text style={styles.errorMessage}>{error && error.message}</Text>
      </View>
    );
  }
}

const styles = {
  input: {
    borderColor: "blue",
    borderWidth: 1,
    margin: 25,
    marginBottom: 7
  },
  inputInvalid: {
    borderColor: "red",
    borderWidth: 1,
    margin: 25,
    marginBottom: 7
  },
  errorMessage: {
    height: 15,
    color: "red",
    marginLeft: 25
  }
};

ValidatedTextInput.propTypes = {
  errors: PropTypes.array
};

export default ValidatedTextInput;
