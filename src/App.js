import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

import DashboardPage from "./Pages/DashboardPage";
import RegisterPage from "./Pages/RegisterPage";
import ProjectPage from "./Pages/ProjectPage";
import EditPage from "./Pages/EditPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AddProject from "./Pages/AddProject";
// import Parent from "./component/Parent";
// import Child from "./component/Child";
function App() {
  return (
    <>

    {/* <Parent>
      <Child/>
    </Parent> */}
{/* 
    <Parent/>
      <Child2/>
    </Parent> */}


   

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/register"
          element={
            
              <RegisterPage />
            
          }
        ></Route>

<Route
          path="/project/:id"
          element={
            <ProtectedRoute>
              <ProjectPage />
            </ProtectedRoute>
          }
        ></Route>

<Route
          path="/addproject"
          element={
            <ProtectedRoute>
              <AddProject />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditPage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;