import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { eachReviewType } from "../../app/profile/profileData";
import { images } from "../../constants";

function ReviewsDisplay({ data }: { data: eachReviewType[] | undefined }) {
  return (
    <>
      {data?.map((each) => {
        const starsArray = [];
        for (let index = 0; index < each.stars; index++) {
          starsArray.push(
            <Image className="h-5 w-5" source={images.star} />
          )
        }
        return (
          <TouchableOpacity className=" my-2 bg-gray-100 py-2 rounded-md">
            <View className="flex-row items-center">
              <Image className="h-8 w-8 mx-2" source={images.pfp} />
              <Text style={{ fontFamily: "DMMedium" }} className=" my-1">
                {each.name}
              </Text>
            </View>
            <View>
              <Text
                style={{ fontFamily: "DMRegular", marginLeft: 20 }}
                className="my-2"
              >
                {each.review}
              </Text>
            </View>
            <View style={{marginLeft: 20}} className="flex-row">{starsArray}</View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}

export default ReviewsDisplay;
