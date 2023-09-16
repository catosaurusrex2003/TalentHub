import React, { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { COLORS, icons } from "../../constants";
import NearbyJobCard from "../../components/common/cards/nearby/NearbyJobCard";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import { useInfiniteFetch } from "../../hook/useInfiniteFetch";

function SearchPage() {
  const router = useRouter();
  const searchParam = useLocalSearchParams().id as string;
  const scrollViewRef = useRef<ScrollView | null>(null);

  const {
    isLoading,
    data,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteFetch("search", {
    query: searchParam,
    page: 1,
  });

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isAtBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height;

    if (isAtBottom) {
      fetchNextPage();
    }
  };
  useEffect(() => {
    if(isFetchingNextPage) scrollToBottom();
  }, [isFetchingNextPage]);

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
      <View className="mx-4 mb-2">
        <Text style={{ fontFamily: "DMBold" }} className="text-lg">
          {searchParam}
        </Text>
        <Text style={{ fontFamily: "DMMedium" }}>Job Oppurtinities</Text>
        <TouchableOpacity onPress={scrollToBottom}>
          <Text>meow</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
        onScroll={handleScroll}
        ref={scrollViewRef}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <>
            {data?.pages.map((eachPage) =>
              eachPage?.data.map((job: any, index: number) => (
                <View key={index} className="my-2 mx-4">
                  <NearbyJobCard
                    job={job}
                    key={`nearby-job-${job?.job_id}`}
                    handleNavigate={() =>
                      router.push(`/job-details/${job.job_id}`)
                    }
                  />
                </View>
              ))
            )}
            {isFetchingNextPage && (
              <ActivityIndicator size="large" color={COLORS.primary} />
            )}
            {!hasNextPage && (
              <Text
                style={{ fontFamily: "DMBold" }}
                className="text-center my-8 text-lg"
              >
                You Have Reached the End
              </Text>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchPage;
