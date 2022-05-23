import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from "react-native";
import SearchBar from "../components/SearchBar/SearchBar";
import { Container, ErrorMessage } from "../components/style";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";
import { callAPI } from "../api/moviedb";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      term: "",
      results: 0,
      scrollToTopState: false,
      seconds: 0,
    };
  }

  onInputChange = (e) => {
    this.setState({ term: e });
  };

  sendResults = () => {
    axios.get(callAPI(this.state.term)).then((res) => {
      const movies = res.data.results;
      this.setState({ movies });
      this.setState({ results: this.state.movies.length });
    });
    Keyboard.dismiss();
  };

  sortPopularity = () => {
    const movies = this.state.movies;

    for (let i = 0; i < movies.length - 1; i++) {
      if (movies[i].popularity < movies[i + 1].popularity) {
        const tmp = movies[i];
        movies[i] = movies[i + 1];
        movies[i + 1] = tmp;

        i = -1;
      }
    }

    return movies;
  };

  formatResult = () => {
    if (this.state.results != 0) {
      {
        this.sortPopularity();
        return this.state.movies.map((movie) => (
          <View key={movie.id}>
            <MovieCard
              image={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              overview={movie.overview}
            />
          </View>
        ));
      }
    } else if (this.state.results == 0) {
      return <ErrorMessage>Couldn't find this movie</ErrorMessage>;
    }
  };

  render() {
    return (
      <SafeAreaView>
        <Container>
          <StatusBar barStyle="dark-content" />
          <SearchBar
            onChange={this.onInputChange}
            onSubmit={this.sendResults}
            value={this.state.term}
          />
          <Text>There are {this.state.results} results</Text>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            {this.formatResult()}
          </ScrollView>
        </Container>
      </SafeAreaView>
    );
  }
}
