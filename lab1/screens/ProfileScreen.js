import React, { Component } from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";

import ValidatedTextInput from "../components/ValidatedTextInput";

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  state = {
    modified: false
  };

  render() {
    const avatarUrl = "";

    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {avatarUrl ? (
            <Text>here...</Text>
          ) : (
            <Avatar.Text size={100} label="+" />
          )}
        </View>

        <ValidatedTextInput
          label="Email"
          name="email"
          value={"gsmeter@gmail.com"}
          onChangeText={this.onEmailChange}
        />

        <ValidatedTextInput
          label="Name"
          name="name"
          value={"Yarik Henza"}
          onChangeText={this.onNameChange}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 10
  },
  avatarContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default ProfileScreen;
