// import { View } from "react-native";
// import Login from "../components/screens/Login";
// import { auth } from "../configs/FirebaseConfig";
// import { Redirect } from "expo-router";

// export default function Index() {
//   const user = auth.currentUser;

//   return (
//     <View
//       style={{
//         flex: 1,
//       }}
//     >
//       {user ? <Redirect href={"./(tabs)"} /> : <Login />}
//     </View>
//   );
// }

import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import Login from "../components/screens/Login";
import { auth } from "../configs/FirebaseConfig";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      // Navigate to the tabs if the user is logged in
      router.push("./(tabs)"); // Ensure this matches your actual tab navigator route
    }
  }, [router]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Show loading indicator while waiting for authentication check */}
      {!auth.currentUser ? <Login /> : <ActivityIndicator size="large" />}
    </View>
  );
}
