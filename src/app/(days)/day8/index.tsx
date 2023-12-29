import MarkdownDisplay from "@/components/day3/MarkdownDisplay"
import { Link, Stack } from "expo-router"
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const styles = StyleSheet.create({})

const description = `
# Day 8

**Weather App**

`

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 8: Weather App" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <View style={{ marginTop: 20 }}>
        <Link href="/day8/weather" asChild>
          <Button title="Go to weather" />
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default DayDetailsScreen
