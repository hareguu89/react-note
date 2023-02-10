import { useCoreQuery } from "@queries/core";
import { listCountryApi } from "@services/country";
import { CountryKey } from "src/constant/queryKey";

export const useCountryQuery = () => {
  const params = {
    size: 1000,
    page: 0,
  };

  return useCoreQuery(
    CountryKey,
    () => {
      return listCountryApi(params);
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );
};

/**
 * useQuery api usage
 * https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://@tanstack/react-query-v3.tanstack.com/reference/useQuery
 *
 */
