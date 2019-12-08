import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import Screens from "../constants/Screens"
import HomeScreen from "../screens/HomeScreen";
import EventScreen from "../screens/events/EventScreen";

const MainStack = createStackNavigator({
  [Screens.HOME]: HomeScreen,
  [Screens.EVENT]: EventScreen
});

MainStack.navigationOptions = {};

MainStack.path = "";

export default MainStack;
