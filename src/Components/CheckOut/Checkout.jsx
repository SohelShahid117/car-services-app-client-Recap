import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
import useAuth from "../../hooks/useAuth";
import useServices from "../../hooks/useServices";

const Checkout = () => {
  // const { user } = useContext(AuthContext);
  const { user } = useAuth();
  const service = useServices();
  const { id } = useParams();
  console.log("get one service-->", id);

  // const [service, setService] = useState({});
  const { title, service_id, price, img } = service;

  // useEffect(() => {
  //   axios
  //     //https://car-services-app-server-recap-c6jy.vercel.app/getOneService/66c28bf1748abe9eafd6705a
  //     .get(`https://car-services-app-server-recap-c6jy.vercel.app/getOneService/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       setService(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);

  console.log(service);

  const handleBookService = (e) => {
    e.preventDefault();
    console.log("service is working");
    const form = e.target;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const date = form.date.value;
    const dueAmount = form.dueAmount.value;
    const message = form.message.value;
    console.log(fName, lName, phone, email, date, dueAmount, message);
    const serviceOrder = {
      service_id,
      fName,
      lName,
      phone,
      email,
      date,
      dueAmount,
      message,
      service: title,
      price: price,
      img: img,
    };
    console.log(serviceOrder);
    //using axios
    axios
      .post(
        "https://car-services-app-server-recap-c6jy.vercel.app/bookingsOrder",
        serviceOrder
      )
      .then((data) => {
        console.log(data.data);
        if (data.data.acknowledged) {
          alert("Congratulations!!! data insert hoyeche");
        }
      })
      .catch((err) => console.log(err));
    form.reset("");
  };
  return (
    <div>
      <h2 className="text-center text-3xl">Book Service:{title}</h2>
      <form className="card-body" onSubmit={handleBookService}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="fName"
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              name="lName"
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Phone</span>
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="dueAmount"
              placeholder="Due Amount"
              defaultValue={price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              type="text"
              name="message"
              rows="3"
              placeholder="Your Message"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Order Confirm"
            className="btn btn-warning text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
