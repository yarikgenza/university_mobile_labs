import React, { Component } from "react";
import { View } from "react-native";

import { Button, Card, Title, Paragraph, Colors } from "react-native-paper";

const EventScreen = ({ navigation }) => {
  const { item } = navigation.state.params;

  return (
    <Card>
      <Card.Cover style={styles.picture} source={{ uri: item.imageUrl }} />
      <Card.Title
        style={styles.cardTitle}
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
        title={item.title}
        subtitle={`Price: ${item.price.male} | Age: ${item.age.male}`}
      />
      <Card.Content>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = {
  cardTitle: {
    backgroundColor: "#ab47bc"
  },
  picture: {
    height: 350
  }
};

export default EventScreen;
