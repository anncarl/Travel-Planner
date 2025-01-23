import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function ({ flightData }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>✈️ Flight Details:</Text>
      <Text style={styles.price}>{flightData?.price}</Text>
      <Text style={styles.text}>Book your flight here👇🏼:</Text>
      <Text style={styles.text}>{flightData?.booking_url}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontFamily: "medium",
    fontSize: 22,
    marginVertical: 5,
  },
  text: {
    fontFamily: "regular",
    fontSize: 16,
    color: "#333",
  },
  price: {
    fontFamily: "medium",
    fontSize: 18,
    color: "#333",
  },
});
