import api from "@utils/interceptor";
import type { CartItem, CartStore } from "types/cart";

export const listCartApi = async (
  req: TApiRequest,
): Promise<TResponseType<CartItem[]>> =>
  api.get(`/client/api/cart?page=${req.page}&size=${req.size}`);

export const deleteCartApi = async (
  ids: number[],
): Promise<TResponseType<number[]>> =>
  api.delete(`/client/api/cart/${ids.join(",")}`);

export const getCartApi = async (
  id: number,
): Promise<TResponseType<CartItem>> => api.get(`/client/api/cart/${id}`);

export const updateCartApi = async (
  id: number,
  value: CartItem,
): Promise<TResponseType<CartItem>> =>
  api.put(`/client/api/cart/${id}`, { data: value });

export const createCartApi = async (
  value: CartItem,
): Promise<TResponseType<CartItem>> =>
  api.post(`/client/api/cart`, { data: value });

export const createOrUpdateCartItemsApi = async (
  value: CartItem[],
): Promise<CartStore[]> =>
  api.post(`/client/api/carts`, { data: value }).then(el => el.payload);
