import React, { Component } from "react";
import { View, Text } from "react-native";

import Firebase from "../../makers/firebase";
import ValidatedTextInput from "../../components/ValidatedTextInput";
import Button from "../../components/Button";
import {
  validateEmail,
  validatePassword,
  validatePhone,
  validateName
} from "../../utils/validators";

class SignUpScreen extends Component {
  static navigationOptions = {
    title: "Sign up"
  };

  state = {
    email: "",
    password: "",
    phone: "",
    name: "",
    errors: []
  };

  onFieldChange = (key, value) => {
    this.setState({ [key]: value });
  };

  onSubmitPress = async () => {
    const { email, password, name, phone } = this.state;
    const { navigation } = this.props;

    const validatedEmail = validateEmail(email);
    const validatedPassword = validatePassword(password);
    const validatedName = validateName(name);
    const validatedPhone = validatePhone(phone);

    const errors = [
      ...validatedEmail.errors,
      ...validatedPassword.errors,
      ...validatedPhone.errors,
      ...validatedName.errors
    ];

    this.setState({ errors });
    if (errors.length) return;

    await this.signUp(email, password, name, phone);
  };

  signUp = async (email, password, name, phone) => {
    const { navigation } = this.props;
    try {
      const response = await Firebase.auth().createUserWithEmailAndPassword(
        email,
        password
      );

      response.user.updateProfile({
        displayName: name,
        phoneNumber: phone
      });

      await Firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("Main");
    } catch ({ message }) {
      alert(message);
    }
  };

  render() {
    const { email, password, phone, name, errors } = this.state;

    return (
      <View style={styles.container}>
        <ValidatedTextInput
          name="email"
          value={email}
          placeholder="Email"
          onChangeText={text => this.onFieldChange("email", text)}
          errors={errors}
        />

        <ValidatedTextInput
          name="password"
          value={password}
          placeholder="Password"
          onChangeText={text => this.onFieldChange("password", text)}
          errors={errors}
          secureTextEntry
        />

        <ValidatedTextInput
          name="phone"
          value={phone}
          placeholder="Phone"
          onChangeText={text => this.onFieldChange("phone", text)}
          errors={errors}
        />

        <ValidatedTextInput
          name="name"
          value={name}
          placeholder="Name"
          onChangeText={text => this.onFieldChange("name", text)}
          errors={errors}
        />

        <View style={styles.buttonContainer}>
          <Button type="primary" title="Sign up" onPress={this.onSubmitPress} />
        </View>
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
  buttonContainer: {
    margin: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  button: {
    marginBottom: 25
  }
};

export default SignUpScreen;
