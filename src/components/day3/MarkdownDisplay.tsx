import React, { PropsWithChildren } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import Markdown from "react-native-markdown-display"

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  )
}

const markdownStyles = StyleSheet.create({
  body: {
    fontFamily: "Roboto",
  },
  heading1: {
    fontSize: 40,
    fontFamily: "InterSemi",
  },
  heading2: {
    fontFamily: "Inter",
  },
})

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
})

export default MarkdownDisplay
