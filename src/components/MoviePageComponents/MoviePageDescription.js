import React from "react";
import { Text, View } from "react-native";
import {
  DescriptionStyleContainer,
  DescriptionStyleText,
} from "./MoviePageStyle";

const MoviePageDescription = (props) => {
  return (
    <DescriptionStyleContainer>
      <DescriptionStyleText>{props.overview}</DescriptionStyleText>
    </DescriptionStyleContainer>
  );
};

export default MoviePageDescription;
