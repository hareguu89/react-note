import { authAtomState } from "@store/User";
import axios from "axios";
import { setRecoil } from "recoil-nexus";

export const getTokenApi = async (): Promise<string> =>
  axios
    .post(
      "https://www.hyper-link.kr:38080/server/auth/anonymous/sign-in",
      {},
      { headers: { withCredentials: true } },
    )
    .then(res => {
      setRecoil(authAtomState, {
        token: res.data.payload.token,
        isLogin: true,
      });

      return res.data.payload.token;
    });
