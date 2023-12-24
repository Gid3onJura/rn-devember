import MarkdownDisplay from "@/components/day3/MarkdownDisplay"
import { Link, Stack } from "expo-router"
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const styles = StyleSheet.create({
  text: {
    color: "#9b4521",
    fontSize: 45,
    fontFamily: "AmaticBold",
  },
})

const description = `
# Day 4

**Animated Splash Screen**

`

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4: Splash Screen" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <View style={{ marginTop: 20 }}>
        <Link href="/day4/animation" asChild>
          <Button title="Go to aninmation" />
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default DayDetailsScreen
