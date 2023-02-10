import api from "src/utils/interceptor";
import type { CategoryTopBrandsType } from "types/topBrand";

export const topBrandListApi = async (): Promise<CategoryTopBrandsType[]> =>
  api.get(`/client/api/top-brands`).then(data => data.payload);
