import React, { useRef } from "react"
import { StyleSheet, View } from "react-native"
import LottieView from "lottie-react-native"

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish: (isCancelled: boolean) => void
}) => {
  const animation = useRef<LottieView>(null)
  return (
    <View style={styles.page}>
      <LottieView
        autoPlay
        onAnimationFinish={onAnimationFinish}
        loop={false}
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@assets/lottie/netflix.json")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default AnimatedSplashScreen
