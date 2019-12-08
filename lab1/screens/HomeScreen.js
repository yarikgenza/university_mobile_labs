import React, { Component } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Snackbar } from "react-native-paper";

import NetInfo from "@react-native-community/netinfo";
import Button from "../components/Button";
import EventsList from "../components/events/List";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Events"
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

    return (
      <SafeAreaView style={styles.container}>
        <EventsList {...this.props} />
        <Snackbar visible={!isConnected} duration={300}>
          Connection lost :(
        </Snackbar>
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  }
};

export default HomeScreen;
