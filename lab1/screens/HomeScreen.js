import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import NetInfo from "@react-native-community/netinfo";
import Firebase from "../makers/firebase";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Movies"
  };

  componentDidMount() {
    this.unsubscribeFromNetworkStatus = NetInfo.addEventListener(
      this.onNetworkStatusChange
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromNetworkStatus();
  }

  onSignOutPress = async () => {
    const { navigation } = this.props;
    await Firebase.auth().signOut();
    navigation.navigate("Auth");
  };

  onNetworkStatusChange = state => {
    const { isConnected } = state;
    if (!isConnected) {
      console.warn("Lost connection...");
    }
  };

  onOfflineGone = () => {};

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
