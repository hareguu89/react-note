import api from "@utils/interceptor";
import type { ICollection, ICollectonParams } from "types/collections";

export const listCollectionsApi = async (
  params: ICollectonParams,
): Promise<TPaginationResponseType<ICollection[]>> => {
  const { payload } = await api.get(`/client/api/trend/collections`, {
    params,
  });

  return payload;
};
