import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const LandingPage = () => {
  return (
    <LinearGradient
      colors={["#0077B5", "#0A66C2", "#004182"]}
      style={styles.container}
    >
      {/* LinkedIn Logo */}
     
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to LinkedIn</Text>
      <Text style={styles.subtitle}>
        Connect with professionals and grow your career
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    paddingHorizontal: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0A66C2",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#fff",
  },
  secondaryButtonText: {
    color: "#fff",
  },
});
