import { useMemo } from "react";
import useSWR from "swr";

export const useCustomFetcher = (url, options = {}) => {
  const { data, error, mutate, isValidating } = useSWR(url, options);

  const isLoading = useMemo(() => !data && !error, [data, error]);

  if (error) {
    throw error;
  }

  return { data, isLoading, mutate, isValidating };
};
