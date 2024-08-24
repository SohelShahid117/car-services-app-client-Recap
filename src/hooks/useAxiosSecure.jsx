import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  // baseURL: 'https://some-domain.com/api',
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        console.log(res);
        return res;
      },
      (err) => {
        console.log(err);
        console.log("error tracked in the interceptor", err.response);
        if (err.response.status === 401 || err.response.status === 403) {
          console.log("logout the user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
