import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Colors } from "../../constants/Colors";
import ItineraryCard from "./itineraryCard";

export default function Itenirary({ details }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🏕️ Plan Details</Text>
      {details &&
        Object.entries(details).map(([day, details], index) => (
          <View key={day}>
            <Text style={styles.days}>{`Day ${index + 1}`}</Text>
            {details?.schedule &&
              details?.schedule?.map((place, index) => (
                <ItineraryCard place={place} index={index} />
              ))}
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  heading: {
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
