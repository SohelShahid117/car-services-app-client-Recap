import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useServices = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    axios
      //https://car-services-app-server-recap-c6jy.vercel.app/getOneService/66c28bf1748abe9eafd6705a
      .get(
        `https://car-services-app-server-recap-c6jy.vercel.app/getOneService/${id}`
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setService(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return service;
  //   return <div></div>;
};

export default useServices;
//61-7 (Super Advanced) Setup Axios interceptor and logout invalid user
