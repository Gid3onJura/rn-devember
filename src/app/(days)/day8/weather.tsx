import { View, Text, ActivityIndicator, StyleSheet, FlatList } from "react-native"
import React, { useEffect, useState } from "react"
import * as Location from "expo-location"
import ForecastItem from "@/components/ForecastItem"

type MainWeather = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

type Weather = {
  name: string
  main: MainWeather
  weather: [
    {
      id: string
      main: string
      description: string
      icon: string
    }
  ]
}

export type Forecast = {
  main: MainWeather
  dt: number
}

type Forcast = {}

const BASE_URL = `https://api.openweathermap.org/data/2.5`
const API_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY

// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}

const WeatherAppScreen = () => {
  const [errorMsg, setErrorMsg] = useState("")
  const [location, setLocation] = useState<Location.LocationObject>()
  const [fetchedWeather, setFetchedWeather] = useState<Weather>()
  const [fetchedForcast, setFetchedForcast] = useState<Forcast[]>()

  useEffect(() => {
    if (location) {
      fetchWeather()
      fetchForcast()
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
    const responseFromApi = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    const data = await responseFromApi.json()

    // save fetched data
    if (data) {
      setFetchedWeather(data)
    }
  }

  const fetchForcast = async () => {
    if (!location) {
      return
    }
    const lat = location?.coords.latitude
    const lon = location?.coords.longitude

    // fetch data
    const responseFromApi = await fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    const data = await responseFromApi.json()

    // save fetched data
    if (data && data.list) {
      setFetchedForcast(data.list)
    }
  }

  if (!fetchedWeather || !fetchedForcast) {
    return <ActivityIndicator />
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.locationName}>{fetchedWeather.name}</Text>
        <Text style={styles.temp}>{Math.round(fetchedWeather.main.temp)}&deg;</Text>
      </View>

      <FlatList
        data={fetchedForcast}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flexGrow: 0,
          height: 200,
          marginBottom: 40,
          paddingHorizontal: 10,
        }}
        contentContainerStyle={{ gap: 10, height: 150 }}
        renderItem={({ item }) => <ForecastItem forecast={item} />}
      />
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
    fontSize: 40,
  },
  temp: {
    fontFamily: "InterBold",
    fontSize: 100,
    color: "gray",
  },
})

export default WeatherAppScreen
