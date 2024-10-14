import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import NewTripCard from "../../components/myTrips/NewTripCard";

export default function MyTrip() {
  const [userTrips, setTrips] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>My Trips</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>

      {userTrips?.length === 0 ? <NewTripCard /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 65,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  heading: {
    fontSize: 35,
    fontFamily: "bold",
  },
});
