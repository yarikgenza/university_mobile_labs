import React, { Component } from "react";
import { View, Text } from "react-native";
import { Snackbar } from "react-native-paper";

import NetInfo from "@react-native-community/netinfo";
import Firebase from "../makers/firebase";
import Button from "../components/Button";

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
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Hello, {user.displayName}</Text>
          <Button
            onPress={this.onSignOutPress}
            type="primary"
            title="Sign Out"
          />
        </View>

        <Snackbar visible={!isConnected} duration={300}>
          Connection lost :(
        </Snackbar>
      </>
    ) : null;
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default HomeScreen;
