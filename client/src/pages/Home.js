import React, { useEffect } from "react";

function Home() {
  // const [User, setUser] = useState();
  // const [protect, setProtect] = useState(false);

  async function fetchToken() {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const res = await fetch("http://localhost:8000", {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          'x-access-token': localStorage.getItem('token'),
        },
      });

      // if (token) {
      //   setProtect(true);
      // }
      // console.log("res => "+res);

      const contentType = res.headers.get("Content-Type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        console.log("Server is sending a JSON response");
        const {email}  = await res.json();
        console.log("User data => " + email);
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
