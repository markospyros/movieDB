import React from "react";
import { Image } from "react-native";

const MovieImage = (props) => {
  return (
    <Image
      style={{
        width: 167,
        height: 206,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderWidth: 5,
      }}
      source={{
        uri: `https://image.tmdb.org/t/p/w500/${props.img}`,
      }}
    />
  );
};

export default MovieImage;
