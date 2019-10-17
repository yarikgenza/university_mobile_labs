import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Snackbar } from "react-native-paper";

import NetInfo from "@react-native-community/netinfo";
import Firebase from "../makers/firebase";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Movies"
  };

  state = {
    isConnected: true
  };

  componentDidMount() {
    this.unsubscribeFromNetworkStatus = NetInfo.addEventListener(
      ({ isConnected }) => this.setState({ isConnected })
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

  render() {
    const { isConnected } = this.state;
    const { currentUser: user } = Firebase.auth();

    return user ? (
      <>
        <View>
          <Text>Hello, {user.displayName}</Text>
          <Button onPress={this.onSignOutPress} title="Sign Out" />
        </View>

        <Snackbar visible={!isConnected} duration={300}>
          Connection lost :(
        </Snackbar>
      </>
    ) : null;
  }
}

export default HomeScreen;
