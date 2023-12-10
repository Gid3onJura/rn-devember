import { Stack } from "expo-router"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

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
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={styles.text}>DayDetailsScreen</Text>
    </View>
  )
}

export default DayDetailsScreen
