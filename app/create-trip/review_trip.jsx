import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "../../context/CreateTripContext";
import DetailsCard from "../../components/createTrip/DetailsCard";
import ButtonFull from "../../components/buttons/ButtonFull";
import moment from "moment";
import { useRouter } from "expo-router";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const router = useRouter();

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Review your Trip</Text>
      <Text style={styles.miniheading}>
        Please review your trip details before proceeding
      </Text>
      <DetailsCard icon={"📍"} title={"Destination"}>
        {tripData?.locationInfo?.name}
      </DetailsCard>
      <DetailsCard icon={"👫"} title={"Who is Travelling"}>
        {tripData?.traveller}
      </DetailsCard>
      <DetailsCard icon={"📅"} title={"Travel Date"}>
        {moment(tripData?.startDate).format("DD MMM") +
          " - " +
          moment(tripData?.endDate).format("DD MMM") +
          "  "}
        ({tripData?.totalDays + " days"})
      </DetailsCard>
      <DetailsCard icon={"🤑"} title={"Budget"}>
        {tripData?.budget}
      </DetailsCard>
      <ButtonFull
        style={{ marginTop: 40 }}
        onPress={() => router.replace("create-trip/generate_trip")}
      >
        Build my Trip
      </ButtonFull>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: "25%",
  },
  heading: {
    fontSize: 30,
    fontFamily: "bold",
    marginVertical: 20,
  },
  miniheading: {
    fontSize: 18,
    fontFamily: "medium",
  },
});
