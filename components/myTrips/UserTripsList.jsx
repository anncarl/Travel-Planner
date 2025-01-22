import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import moment from "moment";
import { Colors } from "../../constants/Colors";
import ButtonFull from "../buttons/ButtonFull";
import TripCards from "./TripCards";
import { useRouter } from "expo-router";

export default function UserTripsList({ userTrips }) {
  const latestTrip = userTrips[0]?.tripData;

  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        {latestTrip?.locationInfo?.photo ? (
          <Image
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${latestTrip.locationInfo?.photo}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
            }}
            style={styles.image}
          />
        ) : (
          <Image
            source={require("../../assets/images/travel.jpg")}
            style={styles.image}
          />
        )}
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.destination}>
          {userTrips[0]?.tripPlan?.destination}
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {moment(latestTrip.startDate).format("DD MMM yyyy")}
          </Text>
          <Text style={styles.text}>
            🚌 {"  "}
            {userTrips[0]?.tripPlan?.traveller}
          </Text>
        </View>
        <ButtonFull
          style={{ marginVertical: 10 }}
          onPress={() =>
            router.push({
              pathname: "/travel-details/tripData",
              params: {
                trip: JSON.stringify(userTrips[0]),
              },
            })
          }
        >
          See Trip Details
        </ButtonFull>
      </View>
      {userTrips.map((trip, index) => (
        <TripCards
          trip={trip}
          key={index}
          onPress={() =>
            router.push({
              pathname: "/travel-details/tripData",
              params: {
                trip: JSON.stringify(trip),
              },
            })
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 250,
    objectFit: "cover",
    borderRadius: 15,
  },
  destination: {
    fontSize: 20,
    fontFamily: "medium",
  },
  textContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "regular",
    fontSize: 16,
    color: Colors.gray,
  },
});
