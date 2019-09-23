import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import Firebase from "../../makers/firebase";
import ValidatedTextInput from "../../components/ValidatedTextInput";
import { validateEmail, validatePassword } from "../../utils/validators";

class SignInScreen extends Component {
  static navigationOptions = {
    title: "Sign in"
  };

  state = {
    email: "",
    password: "",
    errors: []
  };

  onEmailChange = email => {
    this.setState({ email });
  };

  onPasswordChange = password => {
    this.setState({ password });
  };

  onSubmitPress = async () => {
    const { email, password } = this.state;
    const { navigation } = this.props;

    const validatedEmail = validateEmail(email);
    const validatedPassword = validatePassword(password);

    const isValid = validatedEmail.isValid && validatedPassword.isValid;

    this.setState({
      errors: validatedEmail.errors.concat(validatedPassword.errors)
    });

    if (!isValid) return;

    try {
      await Firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("Main");
    } catch ({ message }) {
      alert(message);
    }
  };

  onSignUpPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Signup");
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <View style={styles.container}>
        <ValidatedTextInput
          name="email"
          value={email}
          placeholder="Email"
          onChangeText={this.onEmailChange}
          errors={errors}
        />

        <ValidatedTextInput
          name="password"
          value={password}
          placeholder="Password"
          onChangeText={this.onPasswordChange}
          errors={errors}
          secureTextEntry
        />

        <Button title="Sign in" onPress={this.onSubmitPress} />

        <Button title="Sign up" onPress={this.onSignUpPress} />
      </View>
    );
  }
}

const styles = {
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 25
  },
  textInputInvalid: {}
};

export default SignInScreen;
