import { Link } from "expo-router"
import { Pressable, StyleSheet, Text, View } from "react-native"

type DayListItemProps = {
  day: number
}

const styles = StyleSheet.create({
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
    fontSize: 45,
    fontFamily: "AmaticBold",
  },
})

export default function DayListItem({ day }: DayListItemProps) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  )
}
