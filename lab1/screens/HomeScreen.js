import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import Firebase from "../makers/firebase";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  state = {
    user: null
  };

  componentDidMount() {
    try {
      const { currentUser } = Firebase.auth();
      Firebase.database()
        .ref(`users/${currentUser.uid}`)
        .once("value", raw => {
          this.setState({ user: raw.val() });
        });
    } catch ({ message }) {
      console.error(message);
    }
  }

  onSignOutPress = async () => {
    const { navigation } = this.props;
    await Firebase.auth().signOut();
    navigation.navigate("Auth");
  };

  render() {
    const { user } = this.state;

    return user ? (
      <View>
        <Text>Hello, {user.name}</Text>
        <Button onPress={this.onSignOutPress} title="Sign Out" />
      </View>
    ) : null;
  }
}

export default HomeScreen;
