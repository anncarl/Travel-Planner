import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";

export default function DetailsCard({ title, children, icon }) {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.icon}>{icon}</Text>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    gap: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: "regular",
    paddingVertical: 5,
    color: Colors.gray,
  },
  text: {
    fontSize: 18,
    fontFamily: "medium",
  },
  icon: {
    fontSize: 34,
  },
});
