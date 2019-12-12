import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import Screens from "../constants/Screens"
import HomeScreen from "../screens/HomeScreen";
import EventScreen from "../screens/events/EventScreen";
import AddEventScreen from "../screens/events/AddEventScreen";

const MainStack = createStackNavigator({
  [Screens.HOME]: HomeScreen,
  [Screens.EVENT]: EventScreen,
  [Screens.ADD_EVENT]: AddEventScreen,
});

MainStack.navigationOptions = {};

MainStack.path = "";

export default MainStack;
