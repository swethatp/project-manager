import React, {useEffect,useState} from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { deleteProj,deleteProject } from '../store/ProjectSlice'
import UserContext from '../context/UserContext'
export default function DashboardPage()
 {

    const userContext=useContext(UserContext)
    const apiUrl=`https://6620ba383bf790e070b06c93.mockapi.io/api/v1/user/${userContext.user.id}/project`;
    console.log(userContext.user.id);
    const [project,setProject]=useState([]);
    const dispatch = useDispatch();
  const projectLs = useSelector((state) => state.project);
    async function getProjects()
{
    const res = await fetch(apiUrl)
    const data=await res.json()
    console.log(data)
    if(data!=='Not found'){
        setProject(data)
    }
    
}
useEffect(()=>{
    getProjects()
},[])

const handleDelete=(projectId,userId)=>
{
dispatch(deleteProject({projId:projectId,uId:userId}))
}

  return (
    <div>
        <h1 className='font-bold text-3xl text-center mt-5'>My Projects</h1>
     <Link to='/addproject'>  <button className='rounded-md bg-amber-400 px-3 ml-3'>ADD</button></Link>
        {project.length===0 ? (
        
            <div>
                <p>No projects found</p>
            </div>)
        
       : (<> 
        <div>
            
            {project.map(proj =>(
                <div key={proj.id}>
                    <div className=' rounded-md bg-slate-300 m-6 p-5'>
                        <h2>Project id: {proj.id}</h2>
                    <h2 className=' font-bold text-xl mb-5'>Project  Title: {proj.name}</h2>
                    <p className='m-3'><b>Creation Time:</b> {proj.createdAt}</p>
                    <p className='m-3'><b>Details:</b> {proj.details}</p>
                    <p className='m-3'><b>Start Date:</b> {proj.startedAt}</p>
                    <p className='m-3'><b>End Date:</b> {proj.endingAt}</p>
                    <button   onClick={() => {
                    handleDelete(proj.id,userContext.user.id);
                  }} className='rounded-md bg-amber-400 px-3 ml-3 '>DELETE</button>
                    <button className='rounded-md bg-lime-400 px-3 ml-3'>EDIT</button>
                    </div>
                </div>
            ))}
        </div></>)
 }
    </div>
  )
}
