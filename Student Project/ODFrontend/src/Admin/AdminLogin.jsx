import { useState } from "react";
import FormInput from "../Components/FormInput";
import { Link } from "react-router-dom";

function AdminLogin() {
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center align-items-center full-height">
  <div className="register-box shadow p-5 rounded" style={{ width: "400px" }}>
    <h4 className="text-center mb-4">Admin Login</h4>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="registerNumber" className="form-label">
          Enter Mail
        </label>
        <FormInput
          type={"email"}
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Enter Password
        </label>
        <FormInput
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-3">
        Login
      </button>
    </form>
    <div className="mt-3">
    <p>Forgot Password?<Link to="/student/updatepassword">Update</Link></p>
    </div>
  </div>
</div>
  );
}

export default AdminLogin;
