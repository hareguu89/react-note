import api from "@utils/interceptor";
import type { IProductListContents } from "types/product";

export const listProductApi = async (
  { ...rest }: TPaginationRequest,
  pageParam = 0,
): Promise<TPaginationResponseType<IProductListContents[]>> =>
  api
    .get(`/client/api/products`, {
      params: { ...rest, page: pageParam },
    })
    .then(({ payload }) => payload);
