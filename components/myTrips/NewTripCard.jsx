import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Colors } from "../../constants/Colors";
import ButtonFull from "../buttons/ButtonFull";

export default function NewTripCard() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={styles.heading}>No trips planned yet</Text>
      <Text style={styles.body}>
        Your next adventure awaits! Start planning your dream trip by adding a
        destination. Whether it's a weekend getaway or a global tour, we’ll help
        you make it unforgettable.
      </Text>
      <ButtonFull
        style={{ marginVertical: 20 }}
        onPress={() => router.push("/create-trip/search_place")}
      >
        Start a New Trip
      </ButtonFull>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
    paddingVertical: 50,
  },
  heading: {
    fontSize: 25,
    fontFamily: "medium",
  },
  body: {
    fontSize: 18,
    fontFamily: "regular",
    textAlign: "center",
    color: Colors.gray,
  },
});
