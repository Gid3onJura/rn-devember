import { View, Text, ActivityIndicator, StyleSheet, FlatList, ImageBackground } from "react-native"
import React, { useEffect, useState } from "react"
import * as Location from "expo-location"
import ForecastItem from "@/components/ForecastItem"
import { Stack } from "expo-router"
import LottieView from "lottie-react-native"
import { StatusBar } from "expo-status-bar"

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
const OPEN_WEATHER_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY
const UNSPLASH_ACCESS_KEY = process.env.EXPO_PUBLIC_UNSPLASH_ACCESS_KEY
const bgImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg"

// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}

const WeatherAppScreen = () => {
  const [errorMsg, setErrorMsg] = useState("")
  const [location, setLocation] = useState<Location.LocationObject>()
  const [fetchedWeather, setFetchedWeather] = useState<Weather>()
  const [fetchedForcast, setFetchedForcast] = useState<Forcast[]>()
  const [weatherIcon, setWeatherIcon] = useState()
  const [fetchedImage, setFetchedImage] = useState(null)

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
    const responseFromApi = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=metric`
    )
    const data = await responseFromApi.json()

    // save fetched data
    if (data) {
      setFetchedWeather(data)

      if (data.weather[0].main === "Rain") {
        setWeatherIcon(require("@assets/lottie/rain.json"))
      } else if (data.weather[0].main === "Clouds") {
        setWeatherIcon(require("@assets/lottie/clouds.json"))
      } else {
        setWeatherIcon(require("@assets/lottie/sunny.json"))
      }

      // get background image
      fetchLocationImage(data.name)
    }
  }

  const fetchForcast = async () => {
    if (!location) {
      return
    }
    const lat = location?.coords.latitude
    const lon = location?.coords.longitude

    // fetch data
    const responseFromApi = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=metric`
    )
    const data = await responseFromApi.json()

    // save fetched data
    if (data && data.list) {
      setFetchedForcast(data.list)
    }
  }

  const fetchLocationImage = async (locationName: string) => {
    // fetch data
    if (locationName) {
      const responseFromApi = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${encodeURI(
          locationName
        )}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1&orientation=portrait`
      )

      const data = await responseFromApi.json()

      // save fetched data
      if (data && data.results) {
        setFetchedImage(data.results[0].urls.regular)
      }
    }
  }

  if (!fetchedWeather && !fetchedForcast && !fetchedImage) {
    return <ActivityIndicator />
  }

  return (
    <ImageBackground source={fetchedImage ? { uri: fetchedImage } : { uri: bgImage }} style={styles.container}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <LottieView
          source={weatherIcon}
          style={{
            width: 200,
            aspectRatio: 1,
          }}
          loop
          autoPlay
        />
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
      <StatusBar style="light" />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  locationName: {
    fontFamily: "Inter",
    fontSize: 30,
    color: "lightgray",
  },
  temp: {
    fontFamily: "InterBold",
    fontSize: 150,
    color: "#FEFEFE",
  },
})

export default WeatherAppScreen
