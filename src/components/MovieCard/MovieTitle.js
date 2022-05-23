import React from "react";
import { Text, View } from "react-native";
import { LabelTextContainer, LabelTextTitle } from "./MovieCardStyle";

export const MovieTitle = (props) => {
  return (
    <LabelTextContainer>
      <LabelTextTitle>{props.title}</LabelTextTitle>
    </LabelTextContainer>
  );
};
