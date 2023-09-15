import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { icons } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState("Full-Time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Mohammed</Text>
        <Text style={styles.userName}>Find your perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChange={(text) => {
              setSearchTerm(text);
            }}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        {jobTypes.map((eachJobType, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tab(activeJobType, eachJobType)}
            onPress={() => {
              setActiveJobType(eachJobType);
              router.push(`/search/${eachJobType}`);
            }}
          >
            <Text>{eachJobType}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Welcome;
