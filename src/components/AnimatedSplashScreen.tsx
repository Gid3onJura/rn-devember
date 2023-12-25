import React, { useRef } from "react"
import { StyleSheet, View } from "react-native"
import LottieView from "lottie-react-native"
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from "react-native-reanimated"

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView)

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish: (isCancelled: boolean) => void
}) => {
  const animation = useRef<LottieView>(null)
  return (
    <Animated.View style={styles.page}>
      <AnimatedLottieView
        exiting={ZoomOut}
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
    </Animated.View>
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
