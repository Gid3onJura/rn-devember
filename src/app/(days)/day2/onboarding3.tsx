import { Link, Stack } from "expo-router"
import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

function OnboardingScreen() {
  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: "", headerShown: false }} />

      <Ionicons name="people" style={styles.image} size={100} color="#FFDA11" />

      <View style={styles.footer}>
        <Text style={styles.title}>Lorem ipsum3</Text>
        <Text style={styles.description}>
          More Esse ex anim eu culpa sunt. Aute officia ullamco aliqua sint ea exercitation non ut sint ad.
        </Text>

        <View style={styles.buttonsRow}>
          <Text style={styles.buttonText}>Skip</Text>

          <Link href={"/"} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#15141A",
    padding: 20,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontWeight: "700",
    fontFamily: "InterSemi",
    letterSpacing: 1.3,
    marginVertical: 20,
  },
  description: {
    color: "gray",
    fontSize: 18,
    fontFamily: "Inter",
    lineHeight: 25,
  },
  image: {
    alignSelf: "center",
    margin: 20,
  },
  footer: {
    marginTop: "auto",
  },
  button: {
    backgroundColor: "#302e38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
})

export default OnboardingScreen
