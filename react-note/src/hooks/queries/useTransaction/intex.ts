import { useCoreQuery } from "@queries/core";
import { listLatestTransactionsApi } from "@services/transaction";
import { TransactionKey } from "src/constant/queryKey";

export const useTransactionQuery = () => {
  const params = {
    size: 30,
    page: 0,
    sort: "requestedAt,desc",
  };

  return useCoreQuery(
    TransactionKey,
    () => {
      return listLatestTransactionsApi(params);
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );
};

/**
 * useQuery api usage
 * https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://@tanstack/react-query-v3.tanstack.com/reference/useQuery
 *
 */
