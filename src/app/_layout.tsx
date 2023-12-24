import { Stack } from "expo-router"
import React, { useState } from "react"

import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_400Regular } from "@expo-google-fonts/inter"
import { AmaticSC_400Regular, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc"
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import AnimatedSplashScreen from "@/components/AnimatedSplashScreen"

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function RootLaylout() {
  const [appReady, setAppReady] = useState(false)
  const [splashAnimationFinish, setSplashAnimationFinish] = useState(false)

  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterRegular: Inter_400Regular,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
    Roboto: Roboto_400Regular,
    RobotoBold: Roboto_700Bold,
    Courier: Inter_400Regular,
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // SplashScreen.hideAsync()
      setAppReady(true)
    }
  }, [fontsLoaded, fontError])

  // if (!fontsLoaded && !fontError) {
  //   return null
  // }

  if (!appReady || !splashAnimationFinish) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinish(true)
          }
        }}
      />
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{}}>
        <Stack.Screen
          name="index"
          options={{
            title: "DEVember",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  )
}
