import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import EventScreen from "../screens/events/EventScreen";

const MainStack = createStackNavigator({
  Home: HomeScreen,
  Event: EventScreen
});

MainStack.navigationOptions = {};

MainStack.path = "";

export default MainStack;
