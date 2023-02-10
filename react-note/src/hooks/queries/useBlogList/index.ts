import { useCoreQuery, useInfinityCoreQuery } from "@queries/core";
import {
  blogList,
  getBlogsApi,
  infinityBlogList,
  topBlogList,
} from "@services/blogList";
import { blogListParams } from "@store/BlogList";
import { useRecoilValue } from "recoil";
import {
  BlogDetailKey,
  BlogTopListKey,
  BlogTypeListKey,
  InfiniteBlogList,
} from "src/constant/queryKey";
import type { BlogRequestType, BlogType } from "types/blog";

export const option = {
  refetchOnWindowFocus: false,
  keepPreviousData: true,
  staleTime: 60 * 60 * 24,
};

export const useBlogTopListQuery = (
  params: BlogRequestType,
  limit?: number,
) => {
  return useCoreQuery(
    BlogTopListKey(params.type),
    async () => {
      const { payload } = await topBlogList(params, limit);

      return payload;
    },
    option,
  );
};

export const useBlogListQuery = (params: BlogRequestType) => {
  const param = {
    type: "YESBEE_CHOICE",
    page: 0,
    size: 10,
    sort: "createdAt,desc",
  };

  return useCoreQuery(
    BlogTypeListKey(params.type),
    async () => {
      const { payload } = await blogList(param);

      return payload;
    },
    option,
  );
};

export const useBlogDetailQuery = (
  id: string | string[],
  initialData?: BlogType,
) => {
  return useCoreQuery(
    BlogDetailKey(id),
    async () => {
      const { payload } = await getBlogsApi(id);

      return payload;
    },
    { ...option, enabled: !!id, initialData },
  );
};

export const useInfinityBlogList = () => {
  const params = useRecoilValue(blogListParams);

  return useInfinityCoreQuery(
    InfiniteBlogList(params),
    async ({ pageParam = 0 }) => infinityBlogList(params, pageParam),
    {
      getNextPageParam: (lastPageData: TPaginationResponseType<BlogType[]>) =>
        !lastPageData.last ? lastPageData.number + 1 : undefined,
      refetchOnWindowFocus: false,
      keepPreviousData: false,
    },
  );
};
