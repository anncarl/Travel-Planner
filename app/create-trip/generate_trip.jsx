import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { Image } from "react-native";
import { CreateTripContext } from "../../context/CreateTripContext";
import { Colors } from "../../constants/Colors";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModel";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    tripData && GenerateAiTrip();
  }, [tripData]);

  async function GenerateAiTrip() {
    const Final_Prompt = AI_PROMPT.replace(
      "{location}",
      tripData?.locationInfo?.name
    )
      .replace("{totalDays}", tripData?.totalDays)
      .replace("{totalNights}", tripData?.totalDays - 1)
      .replace("{traveller}", tripData?.traveller)
      .replace("{budget}", tripData?.budget)
      .replace("{totalDays}", tripData?.totalDays)
      .replace("{totalNights}", tripData?.totalDays - 1);

    console.log(Final_Prompt);

    const result = await chatSession.sendMessage(Final_Prompt);
    console.log(result.response.text());
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Please Wait...</Text>
      <Text style={styles.miniheading}>As we generate your dream trip</Text>
      <Image
        source={require("../../assets/images/animation.gif")}
        style={styles.gif}
      />
      <Text style={styles.text}>Please do not leave this screen</Text>
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
    textAlign: "center",
  },
  miniheading: {
    fontSize: 18,
    fontFamily: "medium",
    textAlign: "center",
  },
  gif: {
    marginTop: 20,
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    color: Colors.gray,
    fontSize: 16,
    fontFamily: "regular",
  },
});
