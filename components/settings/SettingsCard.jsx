import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Foundation,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import SettingsItem from "./SettingsItem";
import { useTheme } from "../../context/ThemeContext";

const iconLibraries = {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Foundation,
  AntDesign,
  MaterialIcons,
};

export default function SettingsCard({
  children,
  title,
  iconLibrary,
  iconName,
  onPress,
}) {
  const IconComponent = iconLibraries[iconLibrary] || Ionicons;
  const { themeStyles } = useTheme();
  return (
    <View style={styles.outer}>
      <View style={styles.titleContainer}>
        <IconComponent
          name={iconName}
          size={24}
          color={themeStyles.icon}
          style={styles.icon}
        />
        <Text
          style={[
            styles.title,
            {
              color: themeStyles.text,
            },
          ]}
        >
          {title}
        </Text>
      </View>
      <View
        style={[styles.line, { backgroundColor: themeStyles.accent }]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "bold",
  },
  line: {
    height: 1,
    width: "100%",
    // backgroundColor: "#33333380",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
});
