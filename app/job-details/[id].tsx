import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useFetch } from "../../hook/useFetch";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, icons } from "../../constants";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import Company from "../../components/jobdetails/company/Company";
import JobTabs from "../../components/jobdetails/tabs/Tabs";
import Specifics from "../../components/jobdetails/specifics/Specifics";
import JobAbout from "../../components/jobdetails/about/About";
import JobFooter from "../../components/jobdetails/footer/Footer";

type availableTabsOptions = "About" | "Qualification" | "Responsibilities";

const tabs = ["About", "Qualification", "Responsibilities"];

function JobDetails() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<availableTabsOptions>("About");

  const { isLoading, data, error } = useFetch("job-details", {
    job_id: params.id as string,
  });

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualification":
        return (
          <Specifics
            title="Qualification"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "no data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            title="Reponsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
        style={{marginBottom:30}}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={() => {}} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data</Text>
          ) : (
            <View style={{ padding: SIZES.medium }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                Location={data[0].job_country}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        {
          data && <JobFooter url={data[0]?.job_google_link ?? "https://careers.google.com/jobs/results"}/>
        }
      </>
    </SafeAreaView>
  );
}

export default JobDetails;
