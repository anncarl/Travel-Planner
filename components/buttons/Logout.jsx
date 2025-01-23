import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../../constants/Colors";
import { auth } from "../../configs/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      // Navigate to the login screen or show a confirmation
      router.replace("auth/signin");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <Pressable style={styles.container} onPress={handleLogout}>
      <AntDesign name="logout" size={24} color="black" />
      <Text style={styles.text}>Logout</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 40,
    marginHorizontal: "auto",
    paddingVertical: 15,
    width: "60%",
    borderRadius: 25,
    shadowColor: Colors.main,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 8,
  },
  text: {
    fontSize: 18,
    fontFamily: "medium",
    marginLeft: 10,
  },
});
