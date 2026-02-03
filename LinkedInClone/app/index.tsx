import { Text, View } from "react-native";
import LandingPage from '@/components/landing-page';
import MainPage from '@/components/main-page';

export default function Index() {
  return (
    <View style={{flex:1}}>
      {/* <LandingPage /> */}
      <MainPage/>
  </View>
  );
}