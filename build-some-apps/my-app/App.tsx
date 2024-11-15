import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.flexItemFive}></View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.flexItemSix}></View>
        <View style={styles.flexItemSeven}></View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.flexItemOne}></View>
        <View style={styles.flexItemTwo}></View>
        <View style={styles.flexItemThree}></View>
        <View style={styles.flexItemFour}></View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.flexItemEight}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    marginBottom: 10,
  },
  flexContainer: {
    flex: 1,
    flexDirection: "row",
  },
  flexItemOne: {
    flex: 1,
    backgroundColor: "orange",
  },
  flexItemTwo: {
    flex: 1,
    backgroundColor: "green",
  },
  flexItemThree: {
    flex: 1,
    backgroundColor: "orange",
  },
  flexItemFour: {
    flex: 1,
    backgroundColor: "green",
  },
  flexItemFive: {
    flex: 1,
    backgroundColor: "yellow",
  },
  flexItemSix: {
    flex: 1,
    backgroundColor: "orange",
  },
  flexItemSeven: {
    flex: 1,
    backgroundColor: "blue",
  },
  flexItemEight: {
    flex: 1,
    backgroundColor: "orange",
  },
});
