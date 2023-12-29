import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { Forecast } from "@/app/(days)/day8/weather"

const ForecastItem = ({ forecast }: { forecast: Forecast }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>{Math.round(forecast.main.temp)}&deg;</Text>
    </View>
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
    backgroundColor: "ghostwhite",
  },
  temp: {
    fontFamily: "InterBold",
    fontSize: 35,
    color: "gray",
    marginVertical: 10,
  },
  date: {
    fontFamily: "Inter",
    color: "ghostwhite",
    fontSize: 16,
  },
})

export default ForecastItem
