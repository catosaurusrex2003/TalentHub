import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { RAPID_API_KEY } from "@env";

type queryType = {
  query?: string;
  page?: number;
  num_pages?: number;
  job_id?: string;
};

const getPopularJobs = async (endpoint: string, query: queryType) => {
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const response = await axios(options);
  return response.data;
};

export const useFetch = (endpoint: string, query: queryType) => {
  const { isLoading, data, error } = useQuery(
    ["jobs", endpoint, query?.query],
    () => getPopularJobs(endpoint, query)
  );
  return { isLoading, data: data?.data, error };
};
