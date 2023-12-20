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
# Markdown

Integrate Markdown content in **React Native**

📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <View style={{ marginTop: 20 }}>
        <Link href="/day3/editor" asChild>
          <Button title="Go to markdowneditor" />
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default DayDetailsScreen
