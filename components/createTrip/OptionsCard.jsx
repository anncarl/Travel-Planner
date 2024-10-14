import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function OptionsCard({ option, selectedTraveller }) {
  return (
    <View
      style={[
        styles.container,
        selectedTraveller?.id == option?.id && {
          borderWidth: 1,
          borderColor: Colors.gray,
        },
      ]}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{option.title}</Text>
        <Text style={styles.desc}>{option.description}</Text>
      </View>
      <Text style={styles.icon}>{option.icon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.lightgray,
    borderRadius: 15,
  },
  title: {
    fontFamily: "medium",
    fontSize: 20,
  },
  desc: {
    fontFamily: "regular",
    fontSize: 14,
    color: Colors.gray,
    marginTop: 5,
  },
  icon: {
    fontSize: 30,
  },
});
