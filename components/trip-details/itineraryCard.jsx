import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { GetPhotoRef } from "../../services/GooglePlaceApi";
import { useState } from "react";
import { useEffect } from "react";

export default function ItineraryCard({ place, index }) {
  const [photoRef, setPhotoRef] = useState("");
  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    try {
      const result = await GetPhotoRef(place.location);
      console.log("Google Photo Result:", JSON.stringify(result, null, 2)); // Log the entire result

      if (result && result.results && result.results.length > 0) {
        const photos = result.results[0].photos; // Access the photos array
        if (photos && photos.length > 0) {
          setPhotoRef(photos[0].photo_reference); // Set the first photo reference
        } else {
          console.log("No photos found for this location.");
        }
      } else {
        console.log("No results found for this location.");
      }
    } catch (error) {
      console.log("Error fetching photo reference", error);
    }
  };
  return (
    <View key={index} style={styles.itemsContainer}>
      {photoRef ? (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
          }}
          style={styles.image}
        />
      ) : (
        <Image
          source={require("../../assets/images/travel.jpg")}
          style={styles.image}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{place.location}</Text>
        <Text style={styles.desc}>{place.details}</Text>
        <Text style={styles.time}>🕰️ {place.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 150,
    objectFit: "cover",
    marginTop: 5,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  textContainer: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  title: {
    fontFamily: "medium",
    fontSize: 18,
    marginVertical: 5,
  },
  desc: {
    fontFamily: "regular",
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  time: {
    fontFamily: "medium",
    fontSize: 14,
    color: "#333",
  },
  days: {
    fontFamily: "medium",
    fontSize: 22,
    color: Colors.main,
  },
});
