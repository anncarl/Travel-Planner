import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import RadioGroup from "react-native-radio-buttons-group";

export default function Theme() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: "Theme Preferences",
      headerTransparent: true,
      headerTintColor: "#333",
    });
  });

  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Dark Mode",
        value: "option1",
      },
      {
        id: "2",
        label: "Light Mode",
        value: "option2",
      },
      {
        id: "3",
        label: "System Default",
        value: "option2",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Dark Mode</Text>
        <View style={styles.radioGroupContainer}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
          />
        </View>
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
    fontSize: 24,
  },
  radioGroupContainer: {
    flexDirection: "row", // Align the radio buttons horizontally
    justifyContent: "flex-start", // Align the radio buttons to the right
    alignItems: "center", // Center them vertically if needed
    marginTop: 20, // Optional, space from the title
  },
});
