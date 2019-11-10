import React, { Component } from "react";
import { View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Colors,
  Chip
} from "react-native-paper";
import PropTypes from "prop-types";

const MovieCard = ({ item, onPress }) => (
  <Card onPress={onPress} style={styles.container}>
    <Card.Title
      style={styles.cardTitle}
      titleStyle={{ color: "white" }}
      subtitleStyle={{ color: "white" }}
      title={item.title}
      subtitle={`Price: ${item.price.male} | Age: ${item.age.male}`}
    />
    <Card.Cover source={{ uri: item.imageUrl }} />
    <Card.Content>
      <Paragraph>{item.description}</Paragraph>
    </Card.Content>
  </Card>
);

const styles = {
  container: {
    marginBottom: 50
  },
  cardTitle: {
    backgroundColor: "#ab47bc"
  },
  chip: {
    alignSelf: "flex-start",
    marginRight: 10,
    marginBottom: 10
  }
};

MovieCard.propTypes = {
  item: PropTypes.object
};

export default MovieCard;
