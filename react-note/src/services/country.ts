import api from "@utils/interceptor";
import type { ICountry } from "types/country";

export const listCountryApi = (
  req: TApiRequest,
): Promise<TPaginationResponseType<ICountry[]>> =>
  api.get(`/client/api/country?page=${req.page}&size=${req.size}`);
