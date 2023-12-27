import { View, Text, StyleSheet, Image, ViewStyle } from "react-native"
import React from "react"
import { FontAwesome } from "@expo/vector-icons"
import apartment from "@assets/data/apartments.json"

interface ApartmentListItemProps {
  apartment: (typeof apartment)[0]
  containerStyle?: ViewStyle
}

const ApartmentListItem = ({ apartment, containerStyle = {} }: ApartmentListItemProps) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: apartment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{apartment.title}</Text>
        <Text style={styles.description}>{apartment.description}</Text>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>€ {apartment.price}</Text>
            <Text>night</Text>
          </View>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={15} color="black" />
            <View style={styles.rating}>
              <Text>
                {apartment.rating} ({apartment.numberOfStars})
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  title: {
    fontSize: 17,
    fontFamily: "RobotoBold",
    marginBottom: 10,
  },
  description: {
    color: "gray",
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    fontFamily: "RobotoBold",
    fontSize: 17,
    marginRight: 3,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 3,
  },
})

export default ApartmentListItem
