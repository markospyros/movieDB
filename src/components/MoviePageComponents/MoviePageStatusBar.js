import React from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MoviePageStatusBar = (props) => {
  const backgroundColor = props.backgroundColor;

  return (
    <View style={{ backgroundColor: "red" }}>
      <StatusBar animated={true} backgroundColor={backgroundColor} />
    </View>
  );
};

export default MoviePageStatusBar;
