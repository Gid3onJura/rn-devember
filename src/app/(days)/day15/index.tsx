import MarkdownDisplay from "@/components/day3/MarkdownDisplay"
import { Link, Stack } from "expo-router"
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const styles = StyleSheet.create({})

const description = `
# Day 15

**TODO App**

`

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 15: TODO App" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <View style={{ marginTop: 20 }}>
        <Link href="/day15/todo" asChild>
          <Button title="Go to todo" />
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default DayDetailsScreen
