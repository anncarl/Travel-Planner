import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import HotelCard from "./HotelCard";

export default function Hotels({ hotelData }) {
  return (
    <View>
      <Text style={styles.title}>🏨 Recommended Hotels:</Text>
      <FlatList
        data={hotelData}
        renderItem={({ item, index }) => <HotelCard item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontFamily: "medium",
    fontSize: 22,
    marginVertical: 5,
    textTransform: "uppercase",
  },
});
