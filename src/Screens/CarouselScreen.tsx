import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import AutometicCarouselScreen from "./CarouselScreens/AutometicCarouselScreen.tsx";
import DotedCarouselScreen from "./CarouselScreens/DotedCarouselScreen.tsx";

const { width } = Dimensions.get("window");

const CarouselScreen = () => {
  return (
      <View style={styles.container}>
      <AutometicCarouselScreen />
        <DotedCarouselScreen />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    width,
    height: 'auto',
    justifyContent: "center",
    alignItems: "center",
  }
});

export default CarouselScreen;
