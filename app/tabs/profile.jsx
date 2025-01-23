import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SettingsCard from "../../components/settings/SettingsCard";
import SettingsItem from "../../components/settings/SettingsItem";
import Logout from "../../components/buttons/Logout";
import { useRouter } from "expo-router";

export default function Profile() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: true,
      headerTitle: "Settings",
      headerTransparent: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <SettingsCard
          iconName={"manage-accounts"}
          iconLibrary={"MaterialIcons"}
          title={"Account Settings"}
        />
        <SettingsItem>Change Email Address</SettingsItem>
        <SettingsItem>Change Password</SettingsItem>
      </View>

      <View style={styles.innerContainer}>
        <SettingsCard
          iconName={"notifications"}
          iconLibrary={"Ionicons"}
          title={"Notifications"}
        />
        <SettingsItem>Push Notifications</SettingsItem>
      </View>

      <View style={styles.innerContainer}>
        <SettingsCard
          iconName={"theme-light-dark"}
          iconLibrary={"MaterialCommunityIcons"}
          title={"Preferences"}
        />
        <SettingsItem onPress={() => router.push("/settings/theme")}>
          Theme Preferences
        </SettingsItem>
        <SettingsItem>Language</SettingsItem>
      </View>

      <Logout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: "30%",
  },
  innerContainer: {
    marginVertical: 15,
  },
});
