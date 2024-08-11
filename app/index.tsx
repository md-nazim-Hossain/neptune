import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import Home from "@/screens/home";
import NotFoundScreen from "./+not-found";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { colors } from "@/theme/colors";
import Details from "@/screens/details";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("../assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("../assets/fonts/Spartan-Bold.ttf"),
    "Spartan-Regular": require("../assets/fonts/Spartan-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider
      value={{
        dark: !!DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: colors.black,
          text: colors.white,
        },
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="+not-found" component={NotFoundScreen} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
