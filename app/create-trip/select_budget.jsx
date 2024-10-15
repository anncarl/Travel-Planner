import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BudgetOptions } from "../../constants/Options";
import OptionsCard from "../../components/createTrip/OptionsCard";
import ButtonFull from "../../components/buttons/ButtonFull";
import { CreateTripContext } from "../../context/CreateTripContext";
import { set } from "date-fns";
import { useRouter } from "expo-router";

export default function SelectBudget() {
  const navigation = useNavigation();
  const router = useRouter();

  const [selectedBudget, setSelectedBudget] = useState();
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
      budget: selectedBudget?.title,
    });
  }, [selectedBudget]);

  useEffect(() => {
    console.log(JSON.stringify(tripData, null, 2));
  }, [tripData]);

  function handleContinue() {
    if (!selectedBudget) {
      alert("Please select a budget");
      return;
    }
    router.push("create-trip/review_trip");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Budget</Text>
      <View>
        <Text style={styles.miniheading}>Choose Budget for your trip</Text>
        <FlatList
          data={BudgetOptions}
          renderItem={({ item, index }) => (
            <Pressable
              style={{ marginVertical: 15 }}
              onPress={() => setSelectedBudget(item)}
            >
              <OptionsCard option={item} selectedBudget={selectedBudget} />
            </Pressable>
          )}
        />
      </View>
      <ButtonFull style={{ marginTop: 20 }} onPress={handleContinue}>
        Continue
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
    fontSize: 20,
    fontFamily: "bold",
  },
});
