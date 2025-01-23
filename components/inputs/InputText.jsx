import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function InputText({
  children,
  placeholder,
  value,
  placeholderStyle,
  label,
  onChangeText,
  secureTextEntry,
  keyboardType,
  errorText,
  onFocus = () => {},
  ...props
}) {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.inputBox}
        autoCorrect={false}
        autoCapitalize="none"
        onFocus={() => {
          onFocus();
        }}
        secureTextEntry={secureTextEntry ?? false}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    fontSize: 16,
    fontFamily: "regular",
  },
  text: {
    fontSize: 18,
    fontFamily: "medium",
    marginVertical: 10,
    color: "#333",
  },
});
