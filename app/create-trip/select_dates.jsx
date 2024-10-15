import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";

import { Colors } from "../../constants/Colors";
import ButtonFull from "../../components/buttons/ButtonFull";
import { CreateTripContext } from "../../context/CreateTripContext";
import { Link, useRouter } from "expo-router";

export default function SelectDates() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  const onDateChange = (date, type) => {
    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const handleDateSelection = () => {
    if (!startDate && !endDate) {
      alert("Please select dates");
      return;
    }
    const totalDays = endDate.diff(startDate, "days");
    console.log(totalDays + 1);
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalDays: totalDays + 1,
    });
    router.push("/create-trip/select_budget");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Travel Dates</Text>
      <CalendarPicker
        onDateChange={onDateChange}
        allowRangeSelection={true}
        minDate={new Date()}
        selectedRangeStyle={{ backgroundColor: Colors.main }}
        selectedDayTextStyle={{ color: "white" }}
      />

      <ButtonFull style={{ marginTop: 50 }} onPress={handleDateSelection}>
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
});
