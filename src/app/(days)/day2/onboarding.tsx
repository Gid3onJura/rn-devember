import { Link, Stack, router } from "expo-router"
import React, { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler"
import Animated, { FadeIn, FadeOut, SlideInLeft, SlideOutRight } from "react-native-reanimated"
import { SafeAreaView } from "react-native-safe-area-context"

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
    <SafeAreaView style={styles.page}>
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
        <View style={styles.pageContent} key={screenIndex}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    // alignItems: 'center',
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 70,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "Inter",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },

  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,

    padding: 15,
    paddingHorizontal: 25,
  },

  // steps
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    borderRadius: 10,
  },
})

export default OnboardingScreen
