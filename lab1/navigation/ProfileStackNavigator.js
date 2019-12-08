import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../screens/ProfileScreen";

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {};

ProfileStack.path = "";

export default ProfileStack;
