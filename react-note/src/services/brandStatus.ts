import api from "@utils/interceptor";
import type { IBrandStatus } from "types/brandStatus";

export const getBrandStatsApi = (
  brandId: number,
): Promise<TResponseType<IBrandStatus>> => {
  return api.get(`/client/api/brand/stats/${brandId}`);
};
