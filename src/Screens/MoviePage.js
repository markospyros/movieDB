import React from "react";
import { SafeAreaView, Text, ScrollView, StatusBar } from "react-native";
import { callAPI } from "../api/moviedb";
import MoviePageImage from "../components/MoviePageComponents/MoviePageImage";
import axios from "axios";
import MoviePageDescription from "../components/MoviePageComponents/MoviePageDescription";
import MoviePageTitle from "../components/MoviePageComponents/MoviePageTitle";
import MoviePageRating from "../components/MoviePageComponents/MoviePageRating";
import MoviePageStatusBar from "../components/MoviePageComponents/MoviePageStatusBar";

export const MoviePage = ({ route }) => {
  const data = route.params.paramKey;

  return (
    <SafeAreaView>
      <MoviePageStatusBar backgroundColor="red" />
      <ScrollView bounces={false}>
        <MoviePageImage image={data.image} />
        <MoviePageTitle title={data.title} />
        <MoviePageRating rating={data.rating} />
        <MoviePageDescription overview={data.overview} />
      </ScrollView>
    </SafeAreaView>
  );
};
