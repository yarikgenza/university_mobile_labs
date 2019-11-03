import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Colors, Snackbar } from "react-native-paper";

import Card from "./Card";
import fetchEventsList from "../../api/events.api";

class EventsList extends Component {
  state = {
    events: [],
    isLoading: true,
    isRefreshing: false,
    error: null
  };

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = async () => {
    try {
      this.setState({ isLoading: true });
      const events = await fetchEventsList();
      this.setState({ events, isLoading: false });
    } catch ({ message }) {
      this.setState({ error: message });
    }
  };

  onListRefresh = async () => {
    this.setState({ isRefreshing: true });
    const events = await fetchEventsList();
    this.setState({ isRefreshing: false, events });
  };

  _renderItem = ({ item }) => <Card item={item} />;

  render() {
    const { isLoading, isRefreshing, events, error } = this.state;

    return (
      <View>
        {isLoading ? (
          <ActivityIndicator animating color={Colors.red800} size="large" />
        ) : (
          <FlatList
            data={events}
            renderItem={this._renderItem}
            keyExtractor={item => item.title}
            onRefresh={this.onListRefresh}
            refreshing={isRefreshing}
          />
        )}
        {
          <Snackbar duration={300} visible={!!error}>
            {error}
          </Snackbar>
        }
      </View>
    );
  }
}

export default EventsList;
