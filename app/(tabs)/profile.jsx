import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SettingsCard from "../../components/settings/SettingsCard";

export default function Profile() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: "Settings",
      headerTransparent: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      <SettingsCard iconName={"settings-sharp"} iconLibrary={"Ionicons"}>
        Account
      </SettingsCard>
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
});
