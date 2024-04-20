import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

export default function UserStore({ children }) {
  const [user, setUser] = useState(null);
  const [apiUserData,setapiUserData]=useState([]);
  const userApiUrl="https://6620ba383bf790e070b06c93.mockapi.io/api/v1/user"

  function loginUser(email, password) {
    const foundUser=apiUserData.find((item)=>item.email===email && item.password===password)

    if (foundUser) {
      setUser({
        name: foundUser.name,
        email: foundUser.email,
        id: foundUser.id
      });

      return true
    } else {
      return false
    }
  }
async function addUser(formData)
{
    let res= await fetch(userApiUrl,{
        method: "POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(formData),

    })
     let newData= await res.json()
     console.log("Data from new user",newData)
}

async function userApiCall()
{
    const res = await fetch(userApiUrl)
    const data=await res.json()
    console.log(data)
    setapiUserData(data)
}
useEffect(()=>{
    userApiCall()
},[])

  return (
    <UserContext.Provider value={{ user, setUser, loginUser ,addUser}}>
      {children}
    </UserContext.Provider>
  );
}