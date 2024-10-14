import { View, Text, Image, StyleSheet, Button } from "react-native";
import React from "react";

import { Colors } from "@/constants/Colors";
import ButtonFull from "@/components/buttons/ButtonFull";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../../assets/images/new.jpg")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>AI Travel Planner</Text>
        <Text style={styles.bodyText}>
          Discover your next adventure effortlessly. Personalised iteniraries at
          your finger tips.
        </Text>
        <ButtonFull
          style={{ marginTop: "25%" }}
          onPress={() => router.push("auth/signin")}
        >
          Get Started
        </ButtonFull>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 500,
    width: "100%",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "bold",
    marginTop: 30,
  },
  textContainer: {
    backgroundColor: Colors.white,
    marginTop: -20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: "100%",
    padding: 20,
  },
  bodyText: {
    marginVertical: 15,
    textAlign: "center",
    fontFamily: "regular",
    color: Colors.gray,
    fontSize: 17,
  },
});
