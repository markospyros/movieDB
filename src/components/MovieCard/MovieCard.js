import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container } from "./MovieCardStyle";
import MovieImage from "./MovieImage";
import { MovieTitle } from "./MovieTitle";
import { useNavigation } from "@react-navigation/native";
import MovieRating from "./MovieRating";

const MovieCard = (props) => {
  const navigation = useNavigation();
  const showInfo = () => navigation.navigate("MoviePage", { paramKey: props });
  return (
    <Container onPress={showInfo}>
      <MovieImage img={props.image} />
      <MovieTitle title={props.title} />
      <MovieRating rating={props.rating / 2} />
    </Container>
  );
};

export default MovieCard;
