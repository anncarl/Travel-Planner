import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Foundation,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

const iconLibraries = {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Foundation,
  AntDesign,
  MaterialIcons,
};

export default function SettingsCard({ children, iconLibrary, iconName }) {
  const IconComponent = iconLibraries[iconLibrary] || Ionicons;
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <IconComponent
          name={iconName}
          size={24}
          color="black"
          style={styles.icon}
        />
        <Text>{children}</Text>
      </View>
      <AntDesign name="right" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});
