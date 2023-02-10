import { useCoreQuery } from "@queries/core";
import { listProductApi } from "@services/productList";
import { ProductParams } from "@store/Trend";
import { useRecoilValue } from "recoil";
import { ProductListKey } from "src/constant/queryKey";

export const useProductList = () => {
  const recoilValue = useRecoilValue(ProductParams);

  return useCoreQuery(
    ProductListKey(
      recoilValue?.brandId,
      recoilValue.categoryId,
      recoilValue.categoryDepth,
    ),
    async () => listProductApi(recoilValue),
    {
      enabled: !!recoilValue.brandId,
      refetchOnWindowFocus: false,
    },
  );
};
