import React from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useFetch } from "../../hook/useFetch";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { COLORS, icons } from "../../constants";
import NearbyJobCard from "../../components/common/cards/nearby/NearbyJobCard";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";

function SearchPage() {
  const router = useRouter();
  const searchParam = useLocalSearchParams().id as string;
  const { isLoading, data, error } = useFetch("search", {
    query: searchParam,
    num_pages: 1,
    page: 1,
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />
      <View>
        <Text>{searchParam}</Text>
        <Text>Job Oppurtinities</Text>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job: any, index: number) => (
            <View key={index} className="my-2 mx-4">
              <NearbyJobCard
                job={job}
                key={`nearby-job-${job?.job_id}`}
                handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchPage;
