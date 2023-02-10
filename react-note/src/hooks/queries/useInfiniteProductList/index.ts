import { listProductApi } from "@services/productList";
import { OrderNowParams } from "@store/OrderNow";
import { useRecoilValue } from "recoil";
import { ProductListKey } from "src/constant/queryKey";
// eslint-disable-next-line import/order
import { useInfinityCoreQuery } from "../core";

export const useInfiniteProductList = () => {
  const recoilValue = useRecoilValue(OrderNowParams);

  return useInfinityCoreQuery(
    ProductListKey(
      recoilValue?.brandId,
      recoilValue.categoryId,
      recoilValue.categoryDepth,
    ),
    async ({ pageParam = 0 }) => listProductApi(recoilValue, pageParam),
    {
      getNextPageParam: (lastPageData: any) => {
        if (!lastPageData.last) {
          return lastPageData.number + 1;
        }

        return undefined;
      },
      refetchOnWindowFocus: false,
    },
  );
};
