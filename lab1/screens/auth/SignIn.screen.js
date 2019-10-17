import React, { Component } from "react";
import { View, Text } from "react-native";

import Firebase from "../../makers/firebase";
import ValidatedTextInput from "../../components/ValidatedTextInput";
import Button from "../../components/Button";
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

  signIn = async (email, password) => {
    const { navigation } = this.props;
    try {
      await Firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("Main");
    } catch ({ message }) {
      alert(message);
    }
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
      errors: [...validatedEmail.errors, ...validatedPassword.errors]
    });

    if (!isValid) return;
    this.signIn(email, password);
  };

  onSignUpPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Signup");
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <View>
        <ValidatedTextInput
          label="email"
          name="email"
          value={email}
          onChangeText={this.onEmailChange}
          errors={errors}
        />

        <ValidatedTextInput
          name="password"
          label="password"
          value={password}
          onChangeText={this.onPasswordChange}
          errors={errors}
          secureTextEntry
        />

        <View style={styles.buttonsContainer}>
          <Button title="Sign in" type="primary" onPress={this.onSubmitPress} />

          <Button title="Switch to Sign Up" onPress={this.onSignUpPress} />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonsContainer: {
    margin: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
};

export default SignInScreen;
