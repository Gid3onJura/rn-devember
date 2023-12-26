import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { Marker } from "react-native-maps"

interface CustomMarkerProps {
  marker: {
    id: number
    latitude: number
    longitude: number
    description: string
    title: string
    numberOfStars: number
    price: number
    rating: number
    image: string
  }
}

const CustomMarker = ({ marker }: CustomMarkerProps) => {
  return (
    <Marker
      coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
      title={marker.title}
      description={marker.description}
    >
      <View style={styles.marker}>
        <Text style={styles.markertext}>$ {marker.price}</Text>
      </View>
    </Marker>
  )
}

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  markertext: {
    fontSize: 17,
    fontFamily: "InterSemi",
  },
})

export default CustomMarker
