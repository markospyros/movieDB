import React from "react";
import { View, Text } from "react-native";
import { TitleStyleContainer, TitleStyleText } from "./MoviePageStyle";

const MoviePageTitle = (props) => {
  return (
    <TitleStyleContainer>
      <TitleStyleText>{props.title}</TitleStyleText>
    </TitleStyleContainer>
  );
};

export default MoviePageTitle;
