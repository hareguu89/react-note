import api from "@utils/interceptor";
import type { IBrandListContents } from "types/brand";

export const listBrandApi = async (
  params: TApiRequest,
): Promise<TResponseType<TPaginationResponseType<IBrandListContents[]>>> =>
  api.get(`/client/api/brand`, { params });
