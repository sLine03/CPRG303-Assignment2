import { Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { styles } from "../components/styleSheet";
const LandingPage = () => {
  return (
    <LinearGradient
      colors={["#0077B5", "#0A66C2", "#004182"]}
      style={styles.containerLanding}
    >
      {/* LinkedIn Logo */}
     
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
      <TouchableOpacity style={styles.buttonLanding}>
        <Text style={styles.buttonTextLanding}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonLanding, styles.secondaryButtonLanding]}>
        <Text style={[styles.buttonTextLanding, styles.secondaryButtonTextLanding]}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LandingPage;