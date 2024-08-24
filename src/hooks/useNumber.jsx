import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useNumber = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    axios
      .get("/getNumber")
      .then((res) => {
        console.log(res.data);
        setNumber(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   return (
  //     <div>

  //     </div>
  //   )
  return number;
};

export default useNumber;
