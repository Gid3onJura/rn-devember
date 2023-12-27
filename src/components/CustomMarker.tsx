import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { Marker } from "react-native-maps"
import apartment from "@assets/data/apartments.json"

interface CustomMarkerProps {
  marker: (typeof apartment)[0]
  onPress: any
}

const CustomMarker = ({ marker, onPress }: CustomMarkerProps) => {
  return (
    <Marker onPress={onPress} coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}>
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
