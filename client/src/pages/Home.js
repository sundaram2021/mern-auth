import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Home() {
  // const [User, setUser] = useState();
  // const [protect, setProtect] = useState(false);

  async function fetchToken() {
    try {
      const token = Cookies.get("token");
      // console.log(token);
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // if (token) {
      //   setProtect(true);
      // }
      // console.log("res => "+res);

      const contentType = res.headers.get("Content-Type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        console.log("Server is sending a JSON response");
        const { user } = await res.json();
        console.log("User data => " + user);
      } else {
        console.log("Server is not sending a JSON response");
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchToken();
  });

  return <h1 style={{ textAlign: "center" }}>Hello</h1>;
}

export default Home;
