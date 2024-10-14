import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

import { Colors } from "@/constants/Colors";

export default function ButtonOutline({ style, children, onPress }) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    width: "100%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: Colors.main,
  },
  text: {
    color: Colors.main,
    textAlign: "center",
    fontFamily: "medium",
    fontSize: 18,
  },
});
