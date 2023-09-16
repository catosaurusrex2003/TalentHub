import React from "react";
import { Text } from "react-native";

function TextDisplay({ data }: { data: string[] | undefined }) {
  return (
    <>
      {data?.map((each:string)=><Text style={{fontFamily:"DMRegular" ,marginBottom:15}}>{each}</Text>)}
    </>
  );
}

export default TextDisplay;
