import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SettingsItem({ children, onPress }) {
  return (
    <Pressable style={styles.inner} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
      <AntDesign name="right" size={24} color="#333" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "medium",
    marginVertical: 10,
    color: "#333",
  },
});
