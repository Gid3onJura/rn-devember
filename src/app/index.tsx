import { StatusBar } from "expo-status-bar"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import DayListItem from "@components/DayListItem"

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

export default function HomeScreen() {
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
