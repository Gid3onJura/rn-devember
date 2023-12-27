import { Stack } from "expo-router"
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

export default function TinderSwiperScreen() {
  return (
    <View style={styles.page}>
      <Text>Tinder Swipe</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
})
