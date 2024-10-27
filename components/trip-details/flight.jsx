import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function ({ flightData }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>✈️ Flight Details:</Text>
      <Text style={styles.text}>{flightData?.price}</Text>
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
    fontSize: 18,
    marginVertical: 5,
  },
  text: {
    fontFamily: "regular",
    fontSize: 14,
    color: "#333",
  },
});
