import { listProductApi } from "@services/productList";
import { brandListParams } from "@store/BrandList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { InfiniteBrandList } from "src/constant/queryKey";
import type { IProductListContents } from "types/product";

export const useInfiniteBrandList = () => {
  const params = useRecoilValue(brandListParams);

  return useInfiniteQuery(
    InfiniteBrandList(params),
    async ({ pageParam = 0 }) => listProductApi(params, pageParam),
    {
      getNextPageParam: (
        lastPageData: TPaginationResponseType<IProductListContents[]>,
      ) => (!lastPageData.last ? lastPageData.number + 1 : undefined),
      refetchOnWindowFocus: false,
      keepPreviousData: false,
    },
  );
};
