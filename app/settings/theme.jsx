import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RadioGroup from "react-native-radio-buttons-group";
import { Colors } from "../../constants/Colors";
import SettingsRadio from "../../components/settings/SettingsRadio";
import { ThemeContext } from "../../context/ThemeContext";
import { useTheme } from "../../context/ThemeContext";
import { use } from "react";
import { colorScheme } from "nativewind";

export default function Theme() {
  const navigation = useNavigation();

  const { themeStyles } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: "Theme Preferences",
      headerTransparent: false,
      headerStyle: {
        backgroundColor: themeStyles.background,
      },
      headerTitleStyle: {
        color: themeStyles.text,
      },
      headerTintColor: themeStyles.icon,
    });
  }, [themeStyles]);

  const { currentTheme, toggleTheme, useSystemTheme, isSystemTheme } =
    useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: themeStyles.background }]}
    >
      <View style={styles.innerContainer}>
        <Text style={[styles.title, { color: themeStyles.text }]}>
          Theme Switch
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.button, { backgroundColor: themeStyles.pressable }]}
        >
          <Text style={{ color: themeStyles.text }}>Dark Mode</Text>
          <Switch
            value={currentTheme === "dark"}
            onValueChange={() =>
              toggleTheme(currentTheme === "light" ? "dark" : "light")
            }
          />
        </TouchableOpacity>
        <Text
          style={[styles.title, { color: themeStyles.text, marginTop: 20 }]}
        >
          Theme Settings
        </Text>
        <SettingsRadio
          icon={"lightbulb-on"}
          title={"Light"}
          onPress={() => {
            toggleTheme("light");
          }}
          isActive={!isSystemTheme && currentTheme === "light"}
        />
        <SettingsRadio
          icon={"weather-night"}
          title={"Dark"}
          onPress={() => {
            toggleTheme("dark");
          }}
          isActive={!isSystemTheme && currentTheme === "dark"}
        />
        <SettingsRadio
          icon={"theme-light-dark"}
          title={"System Default"}
          onPress={() => {
            useSystemTheme();
          }}
          isActive={isSystemTheme}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 20,
  },
  title: {
    fontFamily: "medium",
    fontSize: 20,
    marginBottom: 10,
  },
  radioGroupContainer: {
    flexDirection: "row", // Align the radio buttons horizontally
    justifyContent: "flex-start", // Align the radio buttons to the right
    alignItems: "center", // Center them vertically if needed
    marginTop: 20, // Optional, space from the title
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
});
