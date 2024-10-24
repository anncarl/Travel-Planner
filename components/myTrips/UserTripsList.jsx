import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import moment from "moment";

export default function UserTripsList({ userTrips }) {
  const latestTrip = userTrips[0]?.tripData;
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/travel.jpg")}
          style={styles.image}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.destination}>
          {userTrips[0]?.tripData?.trip?.destination}
        </Text>
        <Text>{userTrips[0]?.tripData?.trip?.traveler}</Text>
        <Text>{moment(latestTrip.startDate).format("DD MMM yyyy")}</Text>
      </View>
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
});
