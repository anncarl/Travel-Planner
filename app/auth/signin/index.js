import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

import { Colors } from "@/constants/Colors";
import InputText from "../../../components/inputs/InputText";
import ButtonFull from "../../../components/buttons/ButtonFull";
import ButtonOutline from "../../../components/buttons/ButtonOutline";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = () => {
    if (!email && !password) {
      alert("Please fill in all fields");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log("user logged in successfully", user);
        router.replace("/mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorMessage, errorCode);

        if (errorCode === "auth/invalid-credential") {
          alert("You have entered an invalid email or password");
          return;
        }
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's sign you in</Text>
      <Text style={[styles.text, { color: Colors.main }]}>Welcome Back</Text>
      <Text style={[styles.text, { marginBottom: 50 }]}>
        You've been missed!
      </Text>

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
        style={{ marginVertical: 20, marginTop: 60 }}
        onPress={onSignIn}
      >
        Sign In
      </ButtonFull>
      <ButtonOutline onPress={() => router.replace("auth/sign-up")}>
        Create Account
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
