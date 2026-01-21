import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoleAccess from "./RoleAccess";
import StudentLogin from "./Student/StudentLogin";
import AdminLogin from "./Admin/AdminLogin";
import UpdatePassword from "./Student/UpdatePasseord";
import Dashboard from "./Student/DashBoard";
import NewForm from "./Student/NewForm";
import History from "./Student/History";
import Status from "./Student/Status";
import Settings from "./Admin/Settings";
import AddStudent from "./Admin/AddStudent";
import AddAdmin from "./Admin/AddAdmin";
import EditStudent from "./Admin/EditStudent";
import AdminDashboard from "./Admin/AdminDashBoard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoleAccess />} />
          <Route path="/auth" element={<RoleAccess />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/student/updatepassword" element={<UpdatePassword />} />
          
          <Route path="/student/dashboard" element={<Dashboard/>}>
            <Route path="newform" element={<NewForm />} />
            <Route path="history" element={<History />} />
            <Route path="status" element={<Status />} />
          </Route>

        <Route path="admin/admindashboard" element={<AdminDashboard />}>
          {/* <Route path="studenthistory" element={<StudentHistory />} />
          <Route path="analytics" element={<Analytics />} /> */}
          <Route path="settings" element={<Settings />}>
            <Route path="addstudent" element={<AddStudent />} />
            <Route path="addadmin" element={<AddAdmin />} />
            <Route path="editstudent" element={<EditStudent />} />
          </Route>
        </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
