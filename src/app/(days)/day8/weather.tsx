import { View, Text, ActivityIndicator, StyleSheet } from "react-native"
import React, { useEffect, useState } from "react"
import * as Location from "expo-location"

type Weather = {
  name: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
}

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY

const WeatherAppScreen = () => {
  const [fetchedWeather, setFetchedWeather] = useState<Weather>()
  const [errorMsg, setErrorMsg] = useState("")
  const [location, setLocation] = useState<Location.LocationObject>()

  useEffect(() => {
    if (location) {
      fetchWeather()
    }
  }, [location])

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied")
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  const fetchWeather = async () => {
    if (!location) {
      return
    }
    const lat = location?.coords.latitude
    const lon = location?.coords.longitude
    // fetch data
    const responseFromApi = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    const data = await responseFromApi.json()

    // save fetched data
    if (data) {
      setFetchedWeather(data)
    }
  }

  if (!fetchedWeather) {
    return <ActivityIndicator />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.locationName}>{fetchedWeather.name}</Text>
      <Text style={styles.temp}>{Math.round(fetchedWeather.main.temp)}&deg;</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  locationName: {
    fontFamily: "Inter",
    fontSize: 50,
  },
  temp: {
    fontFamily: "InterBold",
    fontSize: 70,
    color: "gray",
  },
})

export default WeatherAppScreen
