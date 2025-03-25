import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SettingsCard from "../../components/settings/SettingsCard";
import SettingsItem from "../../components/settings/SettingsItem";
import Logout from "../../components/buttons/Logout";
import { useRouter } from "expo-router";
import { useTheme } from "../../context/ThemeContext";

export default function Profile() {
  const navigation = useNavigation();
  const router = useRouter();
  const { themeStyles } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: "Settings",
      headerTransparent: false,
      headerStyle: {
        backgroundColor: themeStyles.background,
      },
      headerTitleStyle: {
        color: themeStyles.text,
      },
    });
  }, [themeStyles]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: themeStyles.background,
        },
      ]}
    >
      <View style={styles.innerContainer}>
        <SettingsCard
          iconName={"manage-accounts"}
          iconLibrary={"MaterialIcons"}
          title={"Account Settings"}
        />
        <SettingsItem style={{ color: themeStyles.text }}>
          Change Email Address
        </SettingsItem>
        <SettingsItem style={{ color: themeStyles.text }}>
          Change Password
        </SettingsItem>
      </View>

      <View style={styles.innerContainer}>
        <SettingsCard
          iconName={"notifications"}
          iconLibrary={"Ionicons"}
          title={"Notifications"}
        />
        <SettingsItem style={{ color: themeStyles.text }}>
          Push Notifications
        </SettingsItem>
      </View>

      <View style={styles.innerContainer}>
        <SettingsCard
          iconName={"theme-light-dark"}
          iconLibrary={"MaterialCommunityIcons"}
          title={"Preferences"}
        />
        <SettingsItem
          onPress={() => router.push("/settings/theme")}
          style={{ color: themeStyles.text }}
        >
          Theme Preferences
        </SettingsItem>
        <SettingsItem style={{ color: themeStyles.text }}>
          Language
        </SettingsItem>
      </View>

      <Logout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // paddingTop: "30%",
  },
  innerContainer: {
    marginVertical: 15,
  },
});
