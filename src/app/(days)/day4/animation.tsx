import React, { useEffect, useRef, useState } from "react"
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import LottieView from "lottie-react-native"

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null)

  return (
    <View>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@assets/lottie/netflix.json")}
      />

      <Button title="Play" onPress={() => animation.current?.play()} />
      <Button title="Pause" onPress={() => animation.current?.pause()} />
      <Button title="Reset" onPress={() => animation.current?.reset()} />
    </View>
  )
}

export default AnimationScreen
