import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function ButtonFull({ children, onPress, style }) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.main,
    padding: 10,
    borderRadius: 20,
    width: "100%",
    alignSelf: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "medium",
    fontSize: 18,
  },
});
