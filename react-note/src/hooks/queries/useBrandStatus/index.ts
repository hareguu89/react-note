import { useCoreQuery } from "@queries/core";
import { getBrandStatsApi } from "@services/brandStatus";
import { brandListParams } from "@store/BrandList";
import { useRecoilValue } from "recoil";
import { BrandStatusKey } from "src/constant/queryKey";

export const useBrandStatusQuery = () => {
  const params = useRecoilValue(brandListParams);

  return useCoreQuery(
    BrandStatusKey(params.brandId),
    async () => {
      const { payload } = await getBrandStatsApi(params.brandId);

      return payload;
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      enabled: !!params.brandId,
    },
  );
};

/**
 * useQuery api usage
 * https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://@tanstack/react-query-v3.tanstack.com/reference/useQuery
 *
 */
