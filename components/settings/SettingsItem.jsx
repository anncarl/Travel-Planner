import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";

export default function SettingsItem({ children, onPress, style }) {
  const { themeStyles } = useTheme();
  return (
    <Pressable style={styles.inner} onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
      <AntDesign name="right" size={24} color={themeStyles.icon} />
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
  },
});
