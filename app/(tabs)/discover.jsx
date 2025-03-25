import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from "../../context/CreateTripContext";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

if (typeof window !== "undefined") {
  window.crypto = {
    getRandomValues: (arr) => {
      const randomBytes = new Uint8Array(arr.length);
      for (let i = 0; i < arr.length; i++) {
        randomBytes[i] = Math.floor(Math.random() * 256);
      }
      return randomBytes;
    },
  };
}

export default function Discover() {
  const navigation = useNavigation();
  const router = useRouter();

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: "Search Place",
      headerTransparent: true,
    });
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search Place..."
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data.description);
          console.log(details?.geometry.location);
          console.log(details?.url);
          console.log(details?.photos[0].photo_reference);
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              url: details?.url,
              photo: details?.photos[0].photo_reference,
            },
          });
          router.push("/create-trip/select_traveler");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 5,
            borderColor: Colors.gray,
          },
          textInput: {
            fontSize: 14,
            fontFamily: "regular",
          },
        }}
      />
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
