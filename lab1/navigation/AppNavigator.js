import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import MainStackNavigator from "./MainStackNavigator";
import AuthStackNavigator from "./AuthStackNavigator";

import ContentScreen from "../screens/ContentScreen";
import ProfileScreen from "../screens/ProfileScreen";

export default createAppContainer(
  createBottomTabNavigator({
    Events: MainStackNavigator,
    Content: ContentScreen,
    Profile: ProfileScreen
  })
);
