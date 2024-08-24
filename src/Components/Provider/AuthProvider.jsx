import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "./../../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user is -->", currentUser);
      const userEmail = currentUser?.email || user?.email;
      // const loggedUserEmail = { email: currentUser.email };
      const loggedUserEmail = { email: userEmail };

      setUser(currentUser);
      setLoading(false);

      //if user exist issue a token
      if (currentUser) {
        console.log(loggedUserEmail);
        axios
          // .post("http://localhost:3000/jwt", loggedUserEmail)
          .post("http://localhost:3000/jwt", loggedUserEmail, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log(res);
            console.log("token response-->", res.data);
            console.log("token response-->", res.data.token);
          })
          .catch((err) => {
            console.log(err);
          });

        //   fetch("http://localhost:3000/jwt", {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(loggedUserEmail),
        //   })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data));
        // }
      } else {
        axios
          .post("http://localhost:3000/logout", loggedUserEmail, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  //61-5 (Recap) JWT token verify and status 401, 403

  const authInfo = {
    name: "sohel",
    user,
    setUser,
    loading,
    createUser,
    signInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
