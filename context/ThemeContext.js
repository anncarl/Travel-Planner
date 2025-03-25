import { Colors } from "@/constants/Colors";
import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "react-native";

export const ThemeContext = createContext({
  currentTheme: "light",
  toggleTheme: () => {},
  themeStyles: Colors.light,
  useSystemTheme: () => {},
  isSystemTheme: false,
});

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState("light");
  const [systemTheme, setSystemTheme] = useState(false);

  //   const toggleTheme = () => {
  //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  //     AsyncStorage.setItem("theme", newTheme);
  //   };
  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem("theme");
      if (storedTheme) setTheme(storedTheme);
    };
    loadTheme();
  }, []);

  useEffect(() => {
    if (colorScheme) {
      setTheme(colorScheme);
      AsyncStorage.setItem("theme", colorScheme); // Save in As
    }
  }, [colorScheme]);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light"; // Determine new theme
    setTheme(newTheme);
    setSystemTheme(false);
    await AsyncStorage.setItem("theme", newTheme); // Save in AsyncStorage
  };

  const useSystemTheme = async () => {
    setTheme(colorScheme);
    setSystemTheme(true);
    await AsyncStorage.setItem("theme", colorScheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        setTheme,
        toggleTheme,
        themeStyles: Colors[theme],
        useSystemTheme,
        isSystemTheme: systemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
