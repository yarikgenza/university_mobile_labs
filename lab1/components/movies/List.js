import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import Card from "./Card";
import MoviesApi from "../../api/movies.api";

class MoviesList extends Component {
  state = {
    movies: [],
    isLoading: true,
    isRefreshing: false
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      this.setState({ isLoading: true });
      const movies = await MoviesApi.getList();
      this.setState({ movies, isLoading: false });
    } catch ({ message }) {
      console.log(message);
    }
  };

  onListRefresh = async () => {
    this.setState({ isRefreshing: true });
    const movies = await MoviesApi.getList();
    this.setState({ isRefreshing: false, movies });
  };

  _renderItem = ({ item }) => <Card item={item} />;

  render() {
    const { isLoading, isRefreshing, movies } = this.state;

    return (
      <View>
        {isLoading ? (
          <ActivityIndicator animating color={Colors.red800} size="large" />
        ) : (
          <FlatList
            data={movies}
            renderItem={this._renderItem}
            keyExtractor={item => item.title}
            onRefresh={this.onListRefresh}
            refreshing={isRefreshing}
          />
        )}
      </View>
    );
  }
}

export default MoviesList;
