import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState()

  async function getUser(){
    const res = await fetch("http://localhost:8000/api/user", {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    })
    
    const data = await res.json();
    if(data !== ""){
      setUser(data.firstName)
    } else {
      alert(data.error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      const user = jwt.decode(token);
      if(!user){
        localStorage.removeItem("token")
        navigate('/login')
      } else {
        getUser()
      }
    }
  }, [])

  return (
    <h1 style={{textAlign: "center"}}>Hello {user} </h1>
  )
}

export default Home