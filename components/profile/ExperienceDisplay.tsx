import React from "react";
import { Text, View } from "react-native";
import { eachExperienceType } from "../../app/profile/profileData";
import Timeline from "react-native-timeline-flatlist";

function ExperienceDisplay({
  data,
}: {
  data: eachExperienceType[] | undefined;
}) {
  const structuredData = data?.map((eachExperience: eachExperienceType) => ({
    time: eachExperience.startTime,
    title: eachExperience.organisation,
    description: eachExperience.position,
  }));
  return (
    <>
      <Timeline
        data={structuredData}
        descriptionStyle={{ fontFamily: "DMMedium", fontSize: 12 }}
        titleStyle={{ fontFamily: "DMMedium", fontSize: 14 }}
        timeContainerStyle={{ minWidth: 90 }}
        innerCircle={"dot"}
      />
    </>
  );
}

export default ExperienceDisplay;
