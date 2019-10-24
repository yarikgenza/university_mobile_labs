import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainStackNavigator from "./MainStackNavigator";
import AuthStackNavigator from "./AuthStackNavigator";

export default createAppContainer(
  createSwitchNavigator({
    // Auth: AuthStackNavigator,
    Main: MainStackNavigator
  })
);
