import MarkdownDisplay from "@/components/day3/MarkdownDisplay"
import { Link, Stack } from "expo-router"
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const styles = StyleSheet.create({})

const description = `
# Day 6 - Tinder Swipe

**Let's try an Tinder Swiper**

`

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 6: Tinder Swipe" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <View style={{ marginTop: 20 }}>
        <Link href="/day6/tinder" asChild>
          <Button title="Go to tinder swipe" />
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default DayDetailsScreen
