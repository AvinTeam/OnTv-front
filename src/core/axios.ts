import axios from "axios";
import { GetMessagesError } from "./ErrorHandlerHttpCode";
import { API_URL } from "@/configs/global";
import { show_toast } from "@/utils/functions";
import { useUserStore } from "@/stores/user.store";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

axios.interceptors.request.use(
  function (request) {
    const token = window.localStorage.getItem("onTv_user_token");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { logout } = useUserStore.getState();
    if (error?.response?.status === 401) {
      logout();
      location.href = "/"
    }
    const messages = GetMessagesError(error);
    if (messages?.length) {
      messages.forEach((errorMessage) =>
        show_toast({ text: errorMessage, type: "error" })
      );
    } else
      show_toast({ text: `خطای ${error?.response?.status}`, type: "error" });
    return Promise.reject(error);
  }
);

export default axios;
