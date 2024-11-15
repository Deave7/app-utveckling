import Counter from "@/components/Counter";
import React from "react";
import { Button, Text, View } from "react-native";

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const fruitObjects = [
  { name: "Apple", price: 30 },
  { name: "Banana", price: 20 },
  { name: "Cherry", price: 40 },
  { name: "Date", price: 50 },
  { name: "Elderberry", price: 60 }]

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>{fruits.map(fruit => fruit + "\n")}</Text>
      <Text>{fruitObjects.map(fruit => `${fruit.name} Price: ${fruit.price} \n`)}</Text>
      <Button title="Click Me"></Button>
      <Counter></Counter>
    </View>
  );
}
