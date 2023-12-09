import { StatusBar } from "expo-status-bar"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"

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
  box: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 10,
    backgroundColor: "#f9ede3",
    padding: 10,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
  },
  text: {
    color: "#9b4521",
    fontSize: 30,
  },
})

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          numColumns={4}
          contentContainerStyle={styles.content}
          columnWrapperStyle={styles.column}
          data={uniqueNumbers}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
        />
      </View>

      {/* {uniqueNumbers.map((day) => (
          <View key={day} style={styles.box}>
            <Text style={styles.text}>{day}</Text>
          </View>
        ))} */}

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
