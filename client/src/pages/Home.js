import React, { useEffect, useState } from "react";

function Home() {
  const [email, setEmail] = useState();
  // const [protect, setProtect] = useState(false);

  async function fetchToken() {
    try {
      const token = JSON.parse(localStorage.getItem('token'))
      console.log(token);
      const res = await fetch("http://localhost:8000", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": token,

        },
      });

      if(res.ok){
        const {email} = await res.json()
        // const email = user.email;
        console.log(email);
        setEmail(email)
      }

    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchToken();
    console.log('jkjkj');
  }, []);

  return <h1 style={{ textAlign: "center" }}>Hello { email }</h1>;
}

export default Home;
