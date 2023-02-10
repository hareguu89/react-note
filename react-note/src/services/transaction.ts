import api from "@utils/interceptor";
import type { ITransaction } from "types/transaction";

export const listLatestTransactionsApi = async (
  req: TApiRequest,
): Promise<ITransaction[]> =>
  api
    .get(
      `/client/api/latest-transaction?page=${req.page}&size=${req.size}&${req.sortQueryParams}`,
    )
    .then(el => el.payload.content);
