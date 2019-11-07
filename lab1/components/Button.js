import React, { Component } from "react";
import { Button } from "react-native-paper";
import PropTypes from "prop-types";

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

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string
};

export default StyledButton;
