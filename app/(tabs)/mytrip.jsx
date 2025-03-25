import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { collection, query, where, getDocs } from "firebase/firestore";

import { auth, db } from "../../configs/FirebaseConfig";
import NewTripCard from "../../components/myTrips/NewTripCard";
import { Colors } from "../../constants/Colors";
import UserTripsList from "../../components/myTrips/UserTripsList";
import { useRouter } from "expo-router";

export default function MyTrip() {
  const [userTrips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    user && getTrips();
  }, [user]);

  // async function getTrips() {
  //   setLoading(true);
  //   setTrips([]);
  //   const q = query(
  //     collection(db, "trips"),
  //     where("userEmail", "==", user?.email)
  //   );
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     //console.log(doc.id, " => ", doc.data());
  //     setTrips((prev) => [...prev, doc.data()]);
  //   });
  //   setLoading(false);
  // }

  // console.log(userTrips);

  async function getTrips() {
    setLoading(true);
    setTrips([]);
    const q = query(
      collection(db, "trips"),
      where("userEmail", "==", user.email)
    );
    const querySnapshot = await getDocs(q);
    const trips = [];
    querySnapshot.forEach((doc) => {
      let tripData = doc.data();
      // Check if tripData is a string and parse it if necessary
      if (typeof tripData.tripData === "string") {
        try {
          tripData.tripData = JSON.parse(tripData.tripData);
        } catch (error) {
          console.error("Failed to parse tripData:", error);
        }
      }
      trips.push(tripData);
    });
    setTrips(trips);
    setLoading(false);
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>My Trips</Text>
        <Pressable onPress={() => router.push("/create-trip/search_place")}>
          <Ionicons name="add-circle" size={50} color="black" />
        </Pressable>
      </View>
      {loading && <ActivityIndicator size="large" color={Colors.main} />}

      {userTrips?.length === 0 ? (
        <NewTripCard />
      ) : (
        <UserTripsList userTrips={userTrips} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 65,
    paddingBottom: 20,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  heading: {
    fontSize: 35,
    fontFamily: "bold",
  },
});
