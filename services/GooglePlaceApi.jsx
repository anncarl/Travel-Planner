export const GetPhotoRef = async (location) => {
  const response = await fetch(
    "https://maps.googleapis.com/maps/api/place/textsearch/json" +
      "?query=" +
      location +
      "&key=" +
      process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY
  );

  const result = await response.json();
  console.log(result);
  return result;
};
