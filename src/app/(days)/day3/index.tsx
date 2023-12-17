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
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <View style={{ marginTop: 20 }}>
        <Link href="/day3/editor" asChild>
          <Button title="Go to markdowneditor" />
        </Link>
      </View>
    </View>
  )
}

export default DayDetailsScreen
