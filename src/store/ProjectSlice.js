import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
// import UserContext from '../context/UserContext'
// import { useContext } from 'react'



 const initialState={
    projects:[],
    loading:false,
    error:null
 }
 

 const projectSlice=createSlice({
    name:"projectAction",
    initialState,
    reducers:{addNewProject(state, action) {
        // Assuming payload is the new project data
        state.projects.push(action.payload);
      },
      deleteProj(state, data) {
        const projectId = data.payload;
        console.log(projectId);
        state.projects = state.projects.filter(
          (projectAction) => projectAction.id !== projectId
        );
        deleteProject(projectId);
      },},

    extraReducers:(builder)=>{
        builder

        .addCase(fetchProjects.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchProjects.fulfilled, (state, action) => {
          state.loading = false;
          if (action.payload === "Not found") {
            state.projects = state.projects;
          }
          else{
            state.projects=action.payload
          }
        })
        .addCase(fetchProjects.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error;
        })
            .addCase(createProject.pending,(state)=>
            {
                state.loading=true;
            })
            .addCase(createProject.fulfilled,(state,action)=>
            {
                state.loading=false;
                state.projects.push(action.payload)

            })
            .addCase(createProject.rejected,(state,action)=>
            {
                state.loading=false;
                state.error=action.error;

            })
            .addCase(deleteProject.fulfilled, (state, action) => {
                console.log(action.payload)
                const projectId = action.payload;
                state.projects = state.projects.filter(
                  (projectAction) => projectAction.id !== projectId
                );
              }).addCase(deleteProject.rejected,(state,action)=>{
                console.log(action);
              })

              .addCase(updateProject.fulfilled, (state, action) => {
                const updatedProject = action.payload;
                const index = state.projects.findIndex(
                  (project) => project.id === updatedProject.id
                );
                if (index !== -1) {
                  state.projects[index] = updatedProject;
                }
              });

    }
})

    export const createProject = createAsyncThunk(
        "projects/create",
        async (projectData) => {
          const res = await fetch(
            "https://6620ba383bf790e070b06c93.mockapi.io/api/v1/project",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(projectData),
            }
          );
          const data = await res.json();
          console.log("data from api", data);
          return data;
        }
        
      );

      export const fetchProjects = createAsyncThunk(
        "projects/getAll",
        async (userid) => {
          console.log(userid)
          const res = await fetch(
            `https://6620ba383bf790e070b06c93.mockapi.io/api/v1/user/${userid}/project`
          );
          const data = await res.json();
          return data;
        }
      )

      export const updateProject = createAsyncThunk(
        "projects/update",
        async (updatedData) => {
          const res = await fetch(
            `https://6620ba383bf790e070b06c93.mockapi.io/api/v1/project/${updatedData.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedData),
            }
          );
          const data = await res.json();
          console.log("data from api", data);
          return data;
        }
      );

      export const deleteProject = createAsyncThunk(
        "projects/delete",
        async (data) => {
            
            console.log( `https://6620ba383bf790e070b06c93.mockapi.io/api/v1/user/${data.uId}/project/${data.projId}`)
          try {
            const response = await fetch(
              `https://6620ba383bf790e070b06c93.mockapi.io/api/v1/user/${data.uId}/project/${data.projId}`,
              {
                method: "DELETE",
              }
            );
            if (response.ok) {
              return data.projId;
            } else {
              throw new Error("Failed to delete project");
            }
          } catch (error) {
            throw new Error("Error deleting project: " + error.message);
          }
        }
      );

      export const { addNewProject, deleteProj } = projectSlice.actions;
      export default projectSlice.reducer
 