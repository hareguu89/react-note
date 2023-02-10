import api from "@utils/interceptor";
import type { ITrendList, ITrendParams } from "types/trend";

export const listBrandTrendApi = async (
  data: ITrendParams,
): Promise<TResponseType<ITrendList>> =>
  api.post(`/client/api/trend`, { data });
