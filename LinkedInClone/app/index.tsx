//Landing Page (Sign up/log in)

import { Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
// 1. Import the router hook
import { useRouter } from "expo-router"; 
import { styles } from "../components/styleSheet";

const LandingPage = () => {
  // 2. Initialize the router
  const router = useRouter();

  const handleLogin = () => {
    // 3. Navigate to the (tabs) group
    router.replace("/(tabs)"); 
  };

  return (
    <LinearGradient
      colors={["#0077B5", "#0A66C2", "#004182"]}
      style={styles.containerLanding}
    >
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
        }}
        style={styles.logoLanding}
      />
      <Text style={styles.titleLanding}>Welcome to LinkedIn</Text>
      <Text style={styles.subtitleLanding}>
        Connect with professionals and grow your career
      </Text>

      {/* 4. Attach the function to your button */}
      <TouchableOpacity 
        style={styles.buttonLanding} 
        onPress={handleLogin}
      >
        <Text style={styles.buttonTextLanding}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.buttonLanding, styles.secondaryButtonLanding]}
        onPress={handleLogin}
      >
        <Text style={[styles.buttonTextLanding, styles.secondaryButtonTextLanding]}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LandingPage;