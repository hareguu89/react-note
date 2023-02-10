import { useCoreQuery } from "@queries/core";
import { listBrandApi } from "@services/brands";
import { BrandListKey } from "src/constant/queryKey";

export const option = {
  refetchOnWindowFocus: false,
  keepPreviousData: true,
};

export const useBrandListQuery = (params: TApiRequest) => {
  return useCoreQuery(
    BrandListKey,
    async () => {
      const { payload } = await listBrandApi(params);

      return payload;
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
