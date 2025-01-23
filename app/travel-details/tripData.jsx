import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import moment from "moment";
import { Colors } from "../../constants/Colors";
import Flight from "../../components/trip-details/flight";
import Hotels from "../../components/trip-details/hotels";
import Itenirary from "../../components/trip-details/itenirary";

export default function TripData() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: "",
      headerTransparent: true,
    });
    setTripDetails(JSON.parse(trip));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripDetails.tripData?.locationInfo?.photo}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
        }}
        style={styles.image}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          {tripDetails.tripPlan?.trip?.destination}
        </Text>
        <Text style={styles.text}>
          {moment(tripDetails.tripData?.startDate).format("DD MMM YYYY")} -{" "}
          {moment(tripDetails.tripData?.endDate).format("DD MMM YYYY")}
        </Text>
        <Text style={styles.text}>🚌 {tripDetails.tripPlan?.traveller}</Text>

        {/* Flight Details */}
        <Flight flightData={tripDetails.tripPlan?.flight} />

        {/* Hotel List */}
        <Hotels hotelData={tripDetails.tripPlan?.hotel} />

        {/* Trip Day Planner Info */}
        <Itenirary details={tripDetails.tripPlan?.itinerary} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingBottom: 30,
  },
  image: {
    width: "100%",
    height: 330,
    objectFit: "cover",
  },
  innerContainer: {
    marginTop: -30,
    backgroundColor: "#fff",
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontFamily: "bold",
    fontSize: 25,
    marginBottom: 5,
  },
  text: {
    fontFamily: "regular",
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 5,
  },
});
