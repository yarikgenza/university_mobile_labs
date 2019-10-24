import React, { Component } from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Colors
} from "react-native-paper";
import PropTypes from "prop-types";

const MovieCard = ({ item }) => (
  <Card style={styles.container}>
    <Card.Title
      style={styles.cardTitle}
      titleStyle={{ color: "white" }}
      subtitleStyle={{ color: "white" }}
      title={item.title}
      subtitle={`Rating: ${item.rating} | Year: ${item.year} `}
    />
    <Card.Content>
      <Paragraph>{item.description}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: item.poster }} />
  </Card>
);

const styles = {
  container: {
    marginBottom: 50
  },
  cardTitle: {
    backgroundColor: "#ab47bc"
  }
};

MovieCard.propTypes = {
  item: PropTypes.object
};

export default MovieCard;
