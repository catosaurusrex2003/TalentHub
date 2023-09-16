import React, { useState } from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons } from "../../constants";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import images from "../../constants/images";
import staticUserData from "./profileData";
import TextDisplay from "../../components/profile/TextDisplay";
import ExperienceDisplay from "../../components/profile/ExperienceDisplay";
import SkillsDisplay from "../../components/profile/SkillsDisplay";
import ReviewsDisplay from "../../components/profile/ReviewsDisplay";

type profileCategoriesType = "info" | "experience" | "skills" | "reviews";

const profileCategories: profileCategoriesType[] = [
  "info",
  "experience",
  "skills",
  "reviews",
];

function Index() {
  const router = useRouter();
  const [currentProfileCategory, setCurrentProfileCategory] =
    useState<profileCategoriesType>("reviews");

  const displayContent = () => {
    switch (currentProfileCategory) {
      case "info":
        return <TextDisplay data={staticUserData?.[currentProfileCategory]} />;
      case "experience":
        return (
          <ExperienceDisplay data={staticUserData?.[currentProfileCategory]} />
        );
      case "skills":
        return (
          <SkillsDisplay data={staticUserData?.[currentProfileCategory]} />
        );
      case "reviews":
        return (
          <ReviewsDisplay data={staticUserData?.[currentProfileCategory]} />
        );
      default:
        break;
    }
  };
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: COLORS.lightWhite }}
    >
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
        }}
      />
      <View className="flex-1 items-center">
        <View className="relative">
          <Image className="h-28 w-28 rounded-full" source={images.profile} />
          <TouchableOpacity className="rounded-full absolute bottom-0 right-0  p-1 bg-gray-300 ">
            <Image className="h-5 w-5" source={images.edit} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontFamily: "DMBold" }} className="text-xl mt-2">
          Mohammed Mehdi
        </Text>
        <Text style={{ fontFamily: "DMRegular" }} className="text-md">
          Software Developer
        </Text>
        <View className="flex-row w-3/5 justify-evenly my-3">
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://www.kindpng.com/picc/m/370-3709044_bread-cat-cursed-image-burrito-cat-hd-png.png"
              );
            }}
          >
            <Image className="h-8 w-8" source={images.github} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://i1.sndcdn.com/avatars-Y4tyr562qpW0BkD2-vsYJFQ-t500x500.jpg"
              );
            }}
          >
            <Image className="h-8 w-8" source={images.linkedin} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://i.kym-cdn.com/entries/icons/original/000/044/183/mondaycover.jpg"
              );
            }}
          >
            <Image className="h-8 w-8" source={images.stackoverflow} />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-evenly  w-full mb-5">
          {profileCategories.map((eachCategory) => (
            <TouchableOpacity
              className={` ${
                currentProfileCategory == eachCategory
                  ? "bg-gray-500"
                  : "bg-gray-200"
              }  px-1 py-2 rounded-lg`}
              onPress={() => setCurrentProfileCategory(eachCategory)}
            >
              <Text
                style={{ fontFamily: "DMRegular" }}
                className={`mx-1 text-gray-400 ${
                  currentProfileCategory == eachCategory
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                {eachCategory}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 w-5/6 mb-5"
        >
          {displayContent()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Index;
