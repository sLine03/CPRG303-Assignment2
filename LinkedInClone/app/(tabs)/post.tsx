import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const post = () => {
  return (
    <View
          style={styles.container}
        >
          <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
         
        </View>
  )
}

export default post

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});