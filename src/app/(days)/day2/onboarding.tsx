import { Link, Stack, router } from "expo-router"
import React, { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler"
import Animated, { FadeIn, FadeOut, SlideInLeft, SlideOutRight } from "react-native-reanimated"

const onboardingSteps = [
  {
    icon: "people-arrows",
    title: "Lorem ipsum",
    description: "More Esse ex anim eu culpa sunt. Aute officia ullamco aliqua sint ea exercitation non ut sint ad.",
  },
  {
    icon: "people-carry",
    title: "Lorem ipsum2",
    description: "More Esse ex anim eu culpa sunt. Aute officia ullamco aliqua sint ea exercitation non ut sint ad.",
  },
  {
    icon: "compress-arrows-alt",
    title: "Lorem ipsum3",
    description: "More Esse ex anim eu culpa sunt. Aute officia ullamco aliqua sint ea exercitation non ut sint ad.",
  },
]

function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0)

  const data = onboardingSteps[screenIndex]

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1
    if (isLastScreen) {
      endOnboarding()
    } else {
      setScreenIndex(screenIndex + 1)
    }
  }

  const onBack = () => {
    const isFirstScreen = screenIndex === 0
    if (isFirstScreen) {
      endOnboarding()
    } else {
      setScreenIndex(screenIndex - 1)
    }
  }

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack),
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue)
  )

  const endOnboarding = () => {
    setScreenIndex(0)
    router.back()
  }

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: "", headerShown: false }} />
      <StatusBar style="light" />

      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[styles.stepIndicator, { backgroundColor: index === screenIndex ? "#FFDA11" : "gray" }]}
          ></View>
        ))}
      </View>

      {/* page content */}
      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5 style={styles.image} name={data.icon} size={100} color="#FFDA11" />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text entering={SlideInLeft} exiting={SlideOutRight} style={styles.title}>
              {data.title}
            </Animated.Text>

            <Animated.Text entering={SlideInLeft.delay(200)} exiting={SlideOutRight} style={styles.description}>
              {data.description}
            </Animated.Text>

            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonText}>
                Skip
              </Text>

              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </View>
  )
}

const styles = StyleSheet.create({
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 5,
    marginHorizontal: 15,
    marginTop: 40,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  pageContent: {
    flex: 1,
  },
  page: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#15141A",
    padding: 20,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontWeight: "700",
    fontFamily: "InterSemi",
    letterSpacing: 1.3,
    marginVertical: 20,
  },
  description: {
    color: "gray",
    fontSize: 18,
    fontFamily: "Inter",
    lineHeight: 25,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 70,
  },
  footer: {
    marginTop: "auto",
  },
  button: {
    backgroundColor: "#302e38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
})

export default OnboardingScreen
