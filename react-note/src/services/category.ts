import api from "@utils/interceptor";
import type { CategoryType } from "types/category";

export const listCategoryTreeApi = async (
  depth = 2,
  includeHidden = false,
): Promise<TResponseType<CategoryType>> =>
  api.get(`/client/api/category/tree/${depth}?includeHidden=${includeHidden}`);
