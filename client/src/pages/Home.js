import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Home() {
  const [User, setUser] = useState();
  const [protect, setProtect] = useState(false)

  async function fetchToken() {
    try {
      const token = Cookies.get("token");
      const res = await fetch("http://localhost:8000/api/login", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if(token){
        setProtect(true)
      }

      const user = await res.json();
      setUser(user);
      if (res.ok) {
        console.log("User data => " + user);
      }else {
        throw new Error();
      }
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchToken();
  });

  return <h1 style={{ textAlign: "center" }}>Hello {protect && User} </h1>;
}

export default Home;
