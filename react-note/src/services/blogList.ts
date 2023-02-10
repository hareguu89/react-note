import api from "@utils/interceptor";
import type { BlogRequestType, BlogType } from "types/blog";

export const topBlogList = async (
  params: BlogRequestType,
  limit = 5,
): Promise<TResponseType<BlogType[]>> =>
  api.get(`/client/api/blog/top`, { params: { ...params, limit } });

export const blogList = async <T>(
  params: BlogRequestType | T,
): Promise<TResponseType<TPaginationResponseType<BlogType[]>>> =>
  api.get(`/client/api/blog`, { params });

export const infinityBlogList = async (
  params: BlogRequestType,
  pageParam: number,
): Promise<TPaginationResponseType<BlogType[]>> =>
  api
    .get(`/client/api/blog`, { params: { ...params, page: pageParam } })
    .then(({ payload }) => payload);

export const getBlogsApi = (
  id: string | string[],
): Promise<TResponseType<BlogType>> => api.get(`/client/api/blog/${id}`);

export const getBlogIdByNameApi = (name: string): Promise<TResponseType<any>> =>
  api.get(`/client/api/blog/id-by-name/${encodeURIComponent(name)}`);
