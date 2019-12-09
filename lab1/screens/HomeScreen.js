import React, { Component } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Snackbar, FAB } from "react-native-paper";
import NetInfo from "@react-native-community/netinfo";

import Screens from '../constants/Screens';
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

  onAddPress = async () => {
    const { navigation } = this.props;
    navigation.navigate(Screens.ADD_EVENT);
  }

  render() {
    const { isConnected } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <EventsList {...this.props} />
        <Snackbar visible={!isConnected} duration={300}>
          Connection lost :(
        </Snackbar>
        <FAB
          style={styles.fab}
          small
          label="Add"
          onPress={this.onAddPress}
        />
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
};

export default HomeScreen;
