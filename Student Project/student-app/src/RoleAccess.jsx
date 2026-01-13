import { useNavigate } from "react-router-dom";

function RoleAccess() {
    const navigate=useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center full-height">
      <div className="register-box shadow">

        <h4 className="text-center mb-4">Role Access</h4>

        <div className="d-flex align-items-center justify-content-between mb-4">
          <img src="student.jpg" alt="Student" className="role-img" />
          <button className="btn btn-primary px-4"  onClick={()=>navigate("/student/login")}>Student Login</button>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <img src="Admin.jpg" alt="Admin" className="role-img" />
          <button className="btn btn-success px-4"  onClick={()=>navigate("/admin/login")}>Admin Login</button>
        </div>

      </div>
    </div>
  );
}

export default RoleAccess;
