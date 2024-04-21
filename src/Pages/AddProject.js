
import React, {useState,useEffect, useContext} from 'react'
import { useDispatch } from "react-redux";
import { createProject } from "../store/ProjectSlice";
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
export default function AddProject() {
    const userContext=useContext(UserContext)
    const [newProject,setNewProject]=useState({
    //    name :"",
    //     createdAt:"",
    // details:"",
    // startedAt:"",
    // endingAt:"",
    // userId:userContext.user.id
    })
    const navigate=useNavigate()
    const dispatch=useDispatch()
    function handleSubmit(event){
event.preventDefault()
        console.log(newProject)
        dispatch(createProject(newProject))
        navigate('/dashboard')
    }
  return (
    <div>
        <h1>Add New Project</h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Project Title
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={newProject.name}
                  onChange={(event) => {
                    setNewProject({ ...newProject, name: event.target.value });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                />
              </div>
              <div>
                <label
                  for="createdAt"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Creation Time
                </label>
                <input
                  type="datetime-local "
                  name="createdAt"
                  id="createdAt"
                  placeholder=""
                  value={newProject.createdAt}
                  onChange={(event) => {
                    setNewProject({ ...newProject, createdAt: event.target.value });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <div>
                <label
                  for="details"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Details
                </label>
                <textarea
                  name="details"
                  id="details"
                  rows={20}
                   cols={50}
                  placeholder=""
                  value={newProject.details}
                  onChange={(event) => {
                    setNewProject({ ...newProject, details: event.target.value });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              

              <div>
                <label
                  for="startedAt"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Start Date
                </label>
                <input
                  type="date "
                  name="startedAt"
                  id="startedAt"
                  placeholder=""
                  value={newProject.startedAt}
                  onChange={(event) => {
                    setNewProject({ ...newProject, startedAt: event.target.value });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <div>
                <label
                  for="endingAt"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  End Date
                </label>
                <input
                  type="date "
                  name="endingAt"
                  id="endingAt"
                  placeholder=""
                  value={newProject.endingAt}
                  onChange={(event) => {
                    setNewProject({ ...newProject, endingAt: event.target.value });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>


              
              
                
              <div>
              <button
                type="submit"
                className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Add Project
              </button>
              
              
              </div>
            </form>
    </div>
  )
}
