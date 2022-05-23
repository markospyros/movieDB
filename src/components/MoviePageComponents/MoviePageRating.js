import React from "react";
import { View, Text } from "react-native";
import { Rating } from "react-native-ratings";
import { t } from "react-native-tailwindcss";
import { NotRatedMessageStyle, RatingStyle } from "./MoviePageStyle";

const MoviePageRating = (props) => {
  const rating = props.rating / 2;
  const conditionalRating = () => {
    if (rating == 0) {
      return <NotRatedMessageStyle>NOT RATED</NotRatedMessageStyle>;
    } else {
      return (
        <RatingStyle>
          <Rating
            ratingCount={5}
            imageSize={25}
            ratingBackgroundColor="red"
            readonly={true}
            startingValue={rating}
          />
        </RatingStyle>
      );
    }
  };
  return conditionalRating();
};

export default MoviePageRating;
