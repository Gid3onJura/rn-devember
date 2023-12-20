import MarkdownDisplay from "@/components/day3/MarkdownDisplay"
import React, { useState } from "react"
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import Markdown from "react-native-markdown-display"

const template = `# 🎉 Fun with Markdown!

## 🚀 Introduction
Welcome to this **fun and exciting** markdown guide! Let's dive into the world of Markdown and discover how it makes text formatting cool and easy!

## 🎈 Basics: Add Some Flair

- **Bold and Beautiful:** Make your text stand out! Use \`**\` or \`__\`. Example: **Look at me!**
- *Sassy Italics:* Add a slant with \`*\` or \`_\`. Example: *I'm leaning!*

`

const EditorScreen = () => {
  const [content, setContent] = useState(template)
  const [tab, setTab] = useState("preview")

  return (
    <View style={styles.page}>
      <View style={styles.tabsContainer}>
        <Pressable
          onPress={() => setTab("edit")}
          style={[styles.tab, { borderColor: tab === "edit" ? "mediumorchid" : "gray" }]}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={() => setTab("preview")}
          style={[styles.tab, { borderColor: tab === "preview" ? "mediumorchid" : "gray" }]}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {tab === "edit" ? (
        <TextInput value={content} onChangeText={setContent} multiline numberOfLines={1000} style={styles.input} />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "whitesmoke",
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "white",
  },
  tabsContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  tabText: {
    fontFamily: "Inter",
  },
})

export default EditorScreen
