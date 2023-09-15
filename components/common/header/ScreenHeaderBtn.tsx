import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  DimensionValue,
} from "react-native";

import styles from "./screenheader.style";
import { SIZES } from "../../../constants";
type ScreenHeaderBtnProps = {
  iconUrl: ImageSourcePropType;
  dimension: DimensionValue;
  handlePress?:()=>void,
};

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{
          width: dimension,
          height: dimension,
          borderRadius: SIZES.small / 1.25,
        }}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
