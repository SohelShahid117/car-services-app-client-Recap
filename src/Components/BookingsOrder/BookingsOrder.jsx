import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BookingsOrder = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const { status, date } = bookings;
  //console.log(status, date);
  const axiosSecure = useAxiosSecure();
  // const number = [1, 2, 3, 4, 5];
  //console.log(user);
  // const url = `https://car-services-app-server-recap-c6jy.vercel.app/allBookingsOrder?email=${user?.email}`;
  const url = `/allBookingsOrder?email=${user?.email}`;

  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    // axios
    //   .get(url, { withCredentials: true })
    //   .then((result) => {
    //     console.log(result.data);
    //     setBookings(result.data);
    //   })
    //   .then((err) => console.log(err));

    axiosSecure
      .get(url)
      .then((res) => {
        //console.log(res.data);
        setBookings(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [url, axiosSecure]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setBookings(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   const getAllBookingOrder = async () => {
  //     // const responseData = await axios.get(url, { withCredentials: true });
  //     const responseData = await axios.get(url);
  //     console.log(responseData);
  //     console.log(responseData.data);
  //     setBookings(responseData.data);
  //   };
  //   getAllBookingOrder();
  // }, []);
  //console.log(bookings);
  //console.log(status);

  const handleDelete = (id) => {
    //console.log("delete", id);
    const proceed = confirm("are u sure want to delete");

    //DELETE
    if (proceed) {
      axios
        .delete(
          `https://car-services-app-server-recap-c6jy.vercel.app/allBookingsOrder/${id}`
        )
        .then((res) => {
          //console.log(res.data);
          if (res.data.deletedCount) {
            alert("order deleted successfully");
          }
        })
        .catch((err) => console.log(err));
      const remainingOrder = bookings.filter((b) => b._id != id);
      console.log(remainingOrder);
      setBookings(remainingOrder);
    }
  };

  //UPDATE
  const handleBookingConfirm = (id) => {
    console.log("upadate/confirm", id);
    axios
      .patch(
        `https://car-services-app-server-recap-c6jy.vercel.app/allBookingsOrder/${id}`,
        {
          status: "confirm",
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          alert("order confirmed");
          const remainingOrder = bookings.filter((bk) => bk._id != id);
          const confirmedOrder = bookings.find((bkng) => bkng._id == id);
          confirmedOrder.status = "confirm";
          const newBookings = [confirmedOrder, ...remainingOrder];
          setBookings(newBookings);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Bookings Order:{bookings.length}</h2>
      {/* {bookings.map((b) => {
        return (
          <>
            <p>hello</p>
            <p>hello world</p>
          </>
        );
      })} */}
      <div className="overflow-x-auto text-center">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>
                <button className="btn btn-sm btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </th>
              <th className="text-black text-lg">Image</th>
              <th className="text-black text-lg">Service</th>
              <th className="text-orange-500 text-lg">Date</th>
              <th className="text-black text-lg">Price</th>
              <th className="text-black text-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => {
              return (
                <>
                  <tr key={b._id} className="text-center">
                    <th>
                      <button
                        className={
                          b.status == "confirm"
                            ? "btn btn-sm btn-circle btn-disabled"
                            : "btn btn-sm btn-circle"
                        }
                        onClick={() => handleDelete(b._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </th>
                    <td className="text-black">
                      <div className="avatar">
                        <div className="w-12 h-12 rounded-full">
                          <img src={b.img} />
                        </div>
                      </div>
                    </td>
                    <td className="text-black">{b.service}</td>

                    <td className="text-black">
                      {b.status == "confirm" ? (
                        <span>{b.date}</span>
                      ) : (
                        <input
                          type="date"
                          value={b.date}
                          onChange={(e) => setNewDate(e.target.value)}
                        />
                      )}
                    </td>

                    <td className="text-black">{b.price}</td>
                    <td className="text-black">
                      {b.status == "confirm" ? (
                        <span className="text-green-600 font-bold">
                          Booking Accepted
                        </span>
                      ) : (
                        <button
                          className="btn text-orange-500"
                          onClick={() => handleBookingConfirm(b._id)}
                        >
                          Confirm
                        </button>
                      )}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsOrder;

/*
// Import necessary modules
const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Update form date
router.put('/update-date/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { newDate } = req.body;

        const updatedForm = await Form.findByIdAndUpdate(
            id, 
            { date: newDate }, 
            { new: true } // returns the updated document
        );

        if (!updatedForm) {
            return res.status(404).json({ message: 'Form not found' });
        }

        res.json(updatedForm);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

module.exports = router;

*/

/*
import React, { useState } from 'react';
import axios from 'axios';

const UpdateDateForm = ({ formId }) => {
    const [newDate, setNewDate] = useState('');

    const updateDate = async () => {
        try {
            const response = await axios.put(`/api/update-date/${formId}`, { newDate });
            console.log('Updated Form:', response.data);
        } catch (error) {
            console.error('Error updating date:', error);
        }
    };

    return (
        <div>
            <input 
                type="date" 
                value={newDate} 
                onChange={(e) => setNewDate(e.target.value)} 
            />
            <button onClick={updateDate}>Update Date</button>
        </div>
    );
};

export default UpdateDateForm;

*/
