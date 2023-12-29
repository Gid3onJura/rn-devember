import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { Forecast } from "@/app/(days)/day8/weather"
import dayjs from "dayjs"
import { BlurView } from "expo-blur"

dayjs.locale("de")

console.log("locale:", dayjs.locale())

const ForecastItem = ({ forecast }: { forecast: Forecast }) => {
  return (
    <BlurView intensity={30} style={styles.container}>
      <Text style={styles.temp}>{Math.round(forecast.main.temp)}&deg;</Text>
      <Text style={styles.date}>{dayjs(forecast.dt * 1000).format("dddd DD.MM.YY hh:mm a")}</Text>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    aspectRatio: 3 / 4,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderColor: "gainsboro",
    borderWidth: StyleSheet.hairlineWidth,
  },
  temp: {
    fontFamily: "Inter",
    fontSize: 35,
    color: "white",
    marginVertical: 10,
  },
  date: {
    fontFamily: "Inter",
    color: "ghostwhite",
    fontSize: 16,
  },
})

export default ForecastItem
