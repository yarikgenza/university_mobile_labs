import React, { Component } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import MoviesApi from "../../api/movies.api";

class MoviesList extends Component {
  state = {
    movies: [],
    isLoading: true
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

  render() {
    const { isLoading } = this.state;

    return (
      <View>
        {isLoading ? (
          <ActivityIndicator
            animating={true}
            color={Colors.red800}
            size="large"
          />
        ) : (
          <Text>hellloo</Text>
        )}
      </View>
    );
  }
}

const styles = {};

export default MoviesList;
