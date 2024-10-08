import { useQuery } from "react-query";
import { User as TUser } from "@ts-types/generated";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchMe = async () => {
  const { data } = await User.me(API_ENDPOINTS.ME);
  return data;
};

export const useMeQuery = () => {
  return useQuery<TUser, Error>([API_ENDPOINTS.ME], () => fetchMe());
};
