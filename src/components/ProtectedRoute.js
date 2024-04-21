import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ProtectedRoute({ children }) {
  const userContext = useContext(UserContext);
  console.log(userContext);

  if(!userContext.user){
    return <Navigate to="/" replace />
  }

  return(
    <>
    {/* {children} */}

    <div>
        <header className='  flex justify-between pr-5 pl-5 pt-3 bg-blue-900  text-white  font-bold  text-lg h-14'>
            <div>
            <Link to="/dashboard">  Project Manager</Link>
            </div>
            <div>{userContext.user.name}
            </div>
            </header>

        <div className='flex'>

        {/* <aside className='w-1/5 bg-slate-600 min-h-[100vh]'>This is a sidebar</aside> */}
        {children}
        {/* {React.Children.map(children,child => React.cloneElement(child,{...dataToSend}))} */}
        </div>

    </div>
    </>
  )
}