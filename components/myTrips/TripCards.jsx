import { View, Text, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import moment from "moment";
import { Colors } from "../../constants/Colors";

export default function TripCards({ trip, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${trip.tripData?.locationInfo?.photo}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
        }}
        style={styles.image}
      />
      <View style={styles.textConatiner}>
        <Text style={styles.heading}>{trip.tripPlan?.destination}</Text>
        <Text style={styles.text}>
          {moment(trip.tripData?.startDate).format("DD MMM YYYY")}
        </Text>
        <Text style={styles.text}>Travelling: {trip.tripPlan?.traveller}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textConatiner: {
    marginTop: 15,
  },
  heading: {
    fontFamily: "medium",
    fontSize: 16,
  },
  text: {
    fontFamily: "regular",
    fontSize: 14,
    color: "#333",
  },
});
