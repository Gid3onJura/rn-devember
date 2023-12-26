import { Stack } from "expo-router"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import MapView, { Marker } from "react-native-maps"
import appartments from "@assets/data/appartments.json"
import CustomMarker from "@/components/CustomMarker"

export default function AirbnbScreen() {
  return (
    <View style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        loadingEnabled={true}
        loadingIndicatorColor="#666666"
        loadingBackgroundColor="#eeeeee"
        moveOnMarkerPress={false}
        showsUserLocation={true}
        showsCompass={true}
        showsPointsOfInterest={false}
        provider="google"
        style={styles.map}
        initialRegion={{
          latitude: 51.4802731,
          longitude: 11.9418525,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {appartments.map((marker) => (
          <CustomMarker key={marker.id} marker={marker} />
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
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
