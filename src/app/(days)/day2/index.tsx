import { Link, Stack } from "expo-router"
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  text: {
    color: "#9b4521",
    fontSize: 45,
    fontFamily: "AmaticBold",
  },
})

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <View style={{ marginTop: 20 }}>
        <Link href="/day2/onboarding" asChild>
          <Button title="Go to onboarding" />
        </Link>
      </View>
    </View>
  )
}

export default DayDetailsScreen
