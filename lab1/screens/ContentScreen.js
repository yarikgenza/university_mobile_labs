import React from "react";
import { View, Text } from "react-native";

const ContentScreen = () => (
  <View style={styles.container}>
    <Text>Tab #2</Text>
  </View>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default ContentScreen;
