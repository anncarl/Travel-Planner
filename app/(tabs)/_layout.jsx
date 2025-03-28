import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Colors } from "../../constants/Colors";
import { useTheme } from "../../context/ThemeContext";

export default function TabLayout() {
  const { themeStyles } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeStyles.tabIconSelected,
        tabBarInactiveTintColor: themeStyles.tabIconDefault,
        tabBarStyle: { backgroundColor: themeStyles.background },
      }}
    >
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="map-location" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="travel-explore" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "My Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-large" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
