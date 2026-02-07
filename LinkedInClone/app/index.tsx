import { Text, View } from "react-native";
import LandingPage from '@/components/landing-page';
import MainPage from '@/components/main-page';
import { Stack } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
