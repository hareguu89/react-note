import type { QueryKey } from "@tanstack/react-query";

export type Key = string | readonly unknown[];

export const BrandListKey: QueryKey = ["brand-list"];

export const CategoryKey: QueryKey = ["category-list"];

export const topBrandListKey: QueryKey = ["top-brand-list"];

export const BlogTopListKey = (article: string): QueryKey => [
  "blog-top",
  article,
];
export const BlogDetailKey = (id?: string | string[]): QueryKey => [
  `blog-${id}`,
];
export const BlogTypeListKey = (article?: string): QueryKey => [
  "blog-type",
  article,
];

export const TransactionKey: QueryKey = ["transaction"];

export const CountryKey: QueryKey = ["country"];

export const ProductListKey = (
  brandId: number,
  categoryId: number,
  depth: number,
): QueryKey => ["product-list", { brandId, categoryId, depth }];

export const CollectionKey = (date: string): QueryKey => [
  "collection-list",
  date,
];

export const BrandStatusKey = (brandId: number): QueryKey => [
  "brand-status",
  brandId,
];

export const InfiniteBrandList = ({
  brandId,
  categoryId,
  depth,
  search,
}: TPaginationRequest): QueryKey => [
  "infinite-brand-list",
  { brandId, categoryId, depth, search },
];

export const InfiniteBlogList = ({
  type,
  page,
}: Partial<TPaginationRequest>): QueryKey => [`infinite-${type}-list-${page}`];
