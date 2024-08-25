import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

  // const services = useServices();
  //https://car-services-app-server-recap-c6jy.vercel.app/getAllServices
  // useEffect(() => {
  //   fetch("/services.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setServices(data);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(
        "https://car-services-app-server-recap-c6jy.vercel.app/getAllServices/"
      )
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // const getAllServices = async () => {
    //   const responseData = await axios.get(
    //     "https://car-services-app-server-recap-c6jy.vercel.app/getAllServices"
    //   );
    //   console.log(responseData);
    //   console.log(responseData.data);
    //   setServices(responseData.data);
    // };
    // getAllServices();
  }, []);
  console.log(services);

  return (
    <div className="my-5">
      <div className="text-center w-1/2 mx-auto mb-5">
        <h3 className="text-md text-orange-500 font-bold">Service</h3>
        <h3 className="text-2xl font-semibold">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s._id} service={s}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
