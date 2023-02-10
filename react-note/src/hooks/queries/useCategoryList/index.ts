import { useCoreQuery } from "@queries/core";
import { listCategoryTreeApi } from "@services/category";
import { CategoryKey } from "src/constant/queryKey";

export const option = {
  refetchOnWindowFocus: false,
  keepPreviousData: true,
};

interface ICategoryProps {
  depth: number;
  includeHidden: boolean;
}

export const useCategoryListQuery = (
  { depth, includeHidden }: ICategoryProps,
  options?: any,
) => {
  return useCoreQuery(
    CategoryKey,
    async () => {
      const { payload } = await listCategoryTreeApi(depth, includeHidden);

      return payload?.list;
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      ...options,
    },
  );
};

/**
 * useQuery api usage
 * https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://@tanstack/react-query-v3.tanstack.com/reference/useQuery
 *
 */
