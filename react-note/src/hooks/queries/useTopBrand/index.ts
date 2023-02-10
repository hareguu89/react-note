import { useCoreQuery } from "@queries/core";
import { topBrandListApi } from "@services/topBrand";
import { topBrandListKey } from "src/constant/queryKey";

export const useTopBrandListQuery = () => {
  return useCoreQuery(topBrandListKey, topBrandListApi, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

/**
 * useQuery api usage
 * https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://@tanstack/react-query-v3.tanstack.com/reference/useQuery
 *
 */
