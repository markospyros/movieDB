import React from "react";
import {
  View,
  Image,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";

const MoviePageImage = (props) => {
  return (
    <ImageBackground
      image={props.image}
      style={styles.imageBackgroundStyle}
      blurRadius={5}
      resizeMode="cover"
      source={{
        uri: `https://image.tmdb.org/t/p/w500/${props.image}`,
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${props.image}`,
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackgroundStyle: { width: Dimensions.get("window").width, height: 450 },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: Dimensions.get("window").width / 5,
  },
  image: {
    width: 210,
    height: 310,
  },
});

export default MoviePageImage;
