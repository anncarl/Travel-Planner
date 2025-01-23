import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

import { Colors } from "@/constants/Colors";
import InputText from "../../../components/inputs/InputText";
import ButtonFull from "../../../components/buttons/ButtonFull";
import ButtonOutline from "../../../components/buttons/ButtonOutline";

export default function signup() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {
    if (!email && !password && !fullName) {
      alert("Please fill in all fields");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // console.log(user);
        router.replace("/mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginBottom: 20 }]}>
        Create a New Account
      </Text>

      <InputText
        label={"Full Name"}
        placeholder={"Enter your full name"}
        onChangeText={(value) => setFullName(value)}
      />
      <InputText
        label={"Email Address"}
        placeholder={"Enter your email"}
        onChangeText={(value) => setEmail(value)}
      />
      <InputText
        label={"Password"}
        placeholder={"Enter your password"}
        secureTextEntry
        onChangeText={(value) => setPassword(value)}
      />

      <ButtonFull
        style={{ marginTop: 80, marginVertical: 20 }}
        onPress={onCreateAccount}
      >
        Create Account
      </ButtonFull>
      <ButtonOutline onPress={() => router.replace("auth/signin")}>
        Sign In{" "}
      </ButtonOutline>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: "20%",
    backgroundColor: Colors.white,
    height: "100%",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "bold",
    marginVertical: 10,
  },
});
