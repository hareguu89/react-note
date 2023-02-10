import { useCoreMutation } from "@queries/core";
import { listBrandTrendApi } from "@services/trend";
import { TrendDataParams } from "@store/Trend";
import { useRecoilValue } from "recoil";

export const useTrend = () => {
  const recoilvalue = useRecoilValue(TrendDataParams);

  return useCoreMutation(() => listBrandTrendApi(recoilvalue));
};
