import { StatusBar } from "expo-status-bar"
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import DayListItem from "./src/components/DayListItem"

import { useFonts, Inter_900Black } from "@expo-google-fonts/inter"
import { AmaticSC_400Regular, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"

const uniqueNumbers = [5, 6, 17, 13, 18, 19, 4, 20, 14, 22, 8, 21, 23, 10, 11, 3, 24, 16, 2, 9, 1, 15, 12, 7]

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // gap: 10,
    marginTop: 70,
  },
  content: {
    gap: 10,
  },
  column: {
    gap: 10,
  },
})

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          numColumns={4}
          contentContainerStyle={styles.content}
          columnWrapperStyle={styles.column}
          data={uniqueNumbers}
          renderItem={({ item }) => <DayListItem day={item} />}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
