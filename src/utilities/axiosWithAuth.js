import axios from "axios";
import ls from "local-storage";

export const axiosWithAuth = () => {
  const token = ls.get("access_token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
};
