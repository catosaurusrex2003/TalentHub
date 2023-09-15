import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });
  useEffect(() => {
    async () => {
      if (fontsLoaded) {
        await SplashScreen.preventAutoHideAsync();
      }
    };
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // console.log("font load ho raha hai");
    return null;
  } else {
    // console.log("font loaded");
    SplashScreen.hideAsync();
  }

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
};

export default Layout;
