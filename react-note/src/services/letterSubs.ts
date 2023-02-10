import api from "@utils/interceptor";
import type { ISubscription } from "types/letter";

export const createLetterSubscriptionApi = async (
  value: ISubscription,
): Promise<any> => api.post(`/client/api/letter-subscription`, { data: value });
