import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

import { RAPID_API_KEY } from "@env";

type queryType = {
  query?: string;
  page?: number;
  job_id?: string;
};

// rapid api has mentioned that woh 10 items per page dega.
const presetPerPage = 10;

const getData = async (
  endpoint: string,
  query: queryType,
  pageParam: number
) => {
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
      page: pageParam,
    },
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const response = await axios(options);
  return response.data;
};

export const useInfiniteFetch = (endpoint: string, query: queryType) => {
  const {
    isLoading,
    data,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    [endpoint,query.query],
    ({ pageParam = 1 }) => getData(endpoint, query, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < presetPerPage) {
          return undefined;
        } else {
          return allPages.length + 1;
        }
      },
    }
  );

  return {
    isLoading,
    data,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};
