import { DimensionValue, ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { COLORS, SIZES } from "../../../constants";



const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  // this SHIT callback function gives error in typescript
  // btnImg: (dimension:string):ImageStyle => ({
  //   width: dimension,
  //   height: dimension,
  //   borderRadius: SIZES.small / 1.25,
  // })
});

export default styles;
