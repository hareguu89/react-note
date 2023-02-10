import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";
import axios from "axios";
import { METHOD } from "src/constant/enums";

const useRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // const auth = getRecoil(authAtomState);
  // let { token } = auth;
  // if (!auth.isLogin) {
  //   getTokenApi().then(() => {
  //     token = auth.token;
  //   });
  // }

  // if (token) {
  //   return {
  //     ...config,
  //     headers: {
  //       ...config.headers,
  //       "X-Auth-Token": token,
  //     },
  //   };
  // }

  return {
    ...config,
    headers: {
      ...config.headers,
    },
  };
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  // timeout: 1000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleResponse = <T>(response: AxiosResponse<T>) => {
  return response.data;
};

const createApiMethod =
  (axiosInstance: AxiosInstance, method: Method) =>
  async (
    url: AxiosRequestConfig["url"],
    config?: Omit<AxiosRequestConfig, "url">,
  ): Promise<any> => {
    // axiosInstance.defaults.headers.common["X-Auth-Token"] = "";

    return axiosInstance({
      ...useRequest({ url, ...config }),
      method,
    }).then(res => handleResponse(res));
  };

export default {
  get: createApiMethod(axiosInstance, METHOD.GET),
  post: createApiMethod(axiosInstance, METHOD.POST),
  patch: createApiMethod(axiosInstance, METHOD.PATCH),
  put: createApiMethod(axiosInstance, METHOD.PUT),
  delete: createApiMethod(axiosInstance, METHOD.DELETE),
};
