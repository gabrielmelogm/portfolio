import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.API_URL}/api`,
  headers: {
    authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});
