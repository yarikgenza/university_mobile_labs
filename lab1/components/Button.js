import React, { Component } from "react";
import { Button } from "react-native-paper";

const StyledButton = props => {
  const { type = "simple", title = "" } = props;

  return (
    <Button
      mode="contained"
      style={styles.button}
      color={type !== "primary" && "white"}
      {...props}
    >
      {title}
    </Button>
  );
};

const styles = {
  button: {
    marginTop: 25
  }
};

export default StyledButton;
