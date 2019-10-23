import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import SignInScreen from "../screens/auth/SignIn.screen";
import SignUpScreen from "../screens/auth/SignUp.screen";

const AuthStack = createStackNavigator({
  Login: SignInScreen,
  Signup: SignUpScreen
});

AuthStack.navigationOptions = {};

AuthStack.path = "";

export default AuthStack;
