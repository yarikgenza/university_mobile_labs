import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import SignInScreen from "../screens/auth/SignIn.screen";

const AuthStack = createStackNavigator({
  Login: SignInScreen,
  Signup: SignInScreen
});

AuthStack.navigationOptions = {};

AuthStack.path = "";

export default AuthStack;
