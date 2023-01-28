import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [email, setEmail] = useState();
  const [protection, setProtection] = useState(false);
  const navigate = useNavigate();

  async function fetchToken() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(token);
      const res = await fetch("http://localhost:8000", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": token,
        },
      });

      if (token && res.ok) {
        setProtection(true);
      } else {
        navigate('/login')
      }

      if (res.ok) {
        const { email } = await res.json();
        // const email = user.email;
        console.log(email);
        setEmail(email);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchToken();
    console.log("jkjkj");
  }, []);

  return(protection && <h1 style={{ textAlign: "center" }}>Hello {email}</h1>);
}

export default Home;
