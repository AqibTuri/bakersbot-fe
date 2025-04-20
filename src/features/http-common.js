import axios from "axios";
import { toast } from "react-toastify";
const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  header: {
    "Content-type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => {
    if (response?.data?.message) {
      toast.success(response.data.message);
    }
    return response;
  },
  (error) => {
    const errMsg =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong!";
    toast.error(errMsg);
    return error;
  },
);

export default instance;
