import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function SkillsDisplay({ data }: { data: string[] | undefined }) {
  return (
    <View className="flex-row flex-wrap  justify-evenly mt-5">
      {data?.map((eachSkill) => (
        <TouchableOpacity className=" bg-blue-800 px-3 py-2 w-min m-1 my-2 rounded-md">
          <Text style={{ fontFamily: "DMMedium" }} className=" text-white">
            {eachSkill}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default SkillsDisplay;
