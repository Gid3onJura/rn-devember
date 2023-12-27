import { Stack } from "expo-router"
import React, { useCallback, useMemo, useRef, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import MapView, { Marker } from "react-native-maps"
import apartments from "@assets/data/apartments.json"
import CustomMarker from "@/components/CustomMarker"
import ApartmentListItem from "@/components/ApartmentListItem"
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"

export default function AirbnbScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null)
  const [mapRegion, setMapRegion] = useState({
    latitude: 51.4802731,
    longitude: 11.9418525,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null)

  // variables
  const snapPoints = useMemo(() => [65, "25%", "50%", "90%"], [])

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])
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
        // initialRegion={mapRegion}
        region={mapRegion}
      >
        {apartments.map((marker) => (
          <CustomMarker
            key={marker.id}
            marker={marker}
            onPress={() => {
              setSelectedApartment(marker)
            }}
          />
        ))}
      </MapView>

      {selectedApartment && <ApartmentListItem apartment={selectedApartment} containerStyle={styles.contaierStyle} />}

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        // enablePanDownToClose
      >
        <View style={styles.contentContainer}>
          <Text style={styles.listTitle}>Over {apartments.length} places</Text>
          <BottomSheetFlatList
            data={apartments}
            renderItem={({ item }) => <ApartmentListItem apartment={item} />}
            contentContainerStyle={{ gap: 10, padding: 10 }}
          />
        </View>
      </BottomSheet>
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
  contentContainer: {
    flex: 1,
  },
  contaierStyle: {
    position: "absolute",
    bottom: 80,
    left: 10,
    right: 10,
  },
  listTitle: {
    textAlign: "center",
    fontFamily: "InterBold",
    fontSize: 16,
    marginBottom: 20,
  },
})
