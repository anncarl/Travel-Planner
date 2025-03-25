import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "../../constants/Colors";
import { useTheme } from "../../context/ThemeContext";

export default function SettingsRadio({ title, icon, onPress, isActive }) {
  const { themeStyles } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.settingsButton,
        { backgroundColor: themeStyles.pressable },
      ]}
    >
      <View style={styles.first}>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={themeStyles.icon}
        />
        <Text style={{ color: themeStyles.text }}>{title}</Text>
      </View>
      <MaterialCommunityIcons
        name={
          isActive
            ? "checkbox-marked-circle-outline"
            : "checkbox-blank-circle-outline"
        }
        size={24}
        color={isActive ? Colors.mainAlt : Colors.darkAlt}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  settingsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    height: 50,
  },
  first: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
