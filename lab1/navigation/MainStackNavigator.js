import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";

const MainStack = createStackNavigator({
  Home: HomeScreen
});

MainStack.navigationOptions = {};

MainStack.path = "";

export default MainStack;
