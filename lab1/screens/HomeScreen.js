import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import Firebase from "../makers/firebase";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  onSignOutPress = async () => {
    const { navigation } = this.props;
    await Firebase.auth().signOut();
    navigation.navigate("Auth");
  };

  render() {
    const { currentUser: user } = Firebase.auth();

    return user ? (
      <View>
        <Text>Hello, {user.displayName}</Text>
        <Button onPress={this.onSignOutPress} title="Sign Out" />
      </View>
    ) : null;
  }
}

export default HomeScreen;
