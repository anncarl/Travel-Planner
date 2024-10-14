import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { TravelListOptions } from "../../constants/Options";
import OptionsCard from "../../components/createTrip/OptionsCard";
import { CreateTripContext } from "../../context/CreateTripContext";
import ButtonFull from "../../components/buttons/ButtonFull";

export default function SelectTravel() {
  const navigation = useNavigation();

  const [selectedTraveller, setSelectedTraveller] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);

  useEffect(() => {
    setTripData({
      ...tripData,
      traveller: selectedTraveller,
    });
  }, [selectedTraveller]);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Who's Travelling?</Text>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.miniheading}>Choose Travellers</Text>
        <FlatList
          data={TravelListOptions}
          renderItem={({ item, index }) => (
            <Pressable
              style={{ marginVertical: 15 }}
              onPress={() => setSelectedTraveller(item)}
            >
              <OptionsCard
                option={item}
                selectedTraveller={selectedTraveller}
              />
            </Pressable>
          )}
        />
      </View>
      <ButtonFull style={{ marginTop: 20 }}>Continue</ButtonFull>
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
    marginTop: 20,
  },
  miniheading: {
    fontSize: 20,
    fontFamily: "bold",
  },
});
