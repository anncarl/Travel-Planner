import { View, Text, Image } from "react-native";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GetPhotoRef } from "../../services/GooglePlaceApi";
import { Colors } from "../../constants/Colors";

export default function HotelCard({ item }) {
  const [photoRef, setPhotoRef] = useState("");
  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    try {
      const result = await GetPhotoRef(item.name);
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
    <View style={styles.innerContainer}>
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
      {/* <Image
              source={{
                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item.image_url}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
              }}
              style={styles.image}
            /> */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.address}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.text}>⭐️ {item.rating}</Text>
      </View>
    </View>
  );
}

const styles = {
  innerContainer: {
    marginRight: 15,
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
    backgroundColor: "#f2f2f2",
    padding: 10,
    // Shadow for iOS
    // Shadow for Android
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    width: "100%",
  },
  name: {
    fontFamily: "medium",
    fontSize: 22,
    color: "#333",
    marginVertical: 5,
  },
  desc: {
    fontFamily: "regular",
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  price: {
    fontFamily: "medium",
    fontSize: 16,
    color: Colors.main,
    marginBottom: 5,
  },
  text: {
    fontFamily: "regular",
    fontSize: 16,
  },
};
