import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { CreateTripContext } from "../context/CreateTripContext";
import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout() {
  useFonts({
    regular: require("../assets/fonts/Outfit-Regular.ttf"),
    medium: require("../assets/fonts/Outfit-Medium.ttf"),
    bold: require("../assets/fonts/Outfit-Bold.ttf"),
  });

  const [tripData, setTripData] = useState([]);

  return (
    <ThemeProvider>
      <CreateTripContext.Provider value={{ tripData, setTripData }}>
        <Stack screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
          <Stack.Screen name="(tabs)" />
        </Stack>
      </CreateTripContext.Provider>
    </ThemeProvider>
  );
}
