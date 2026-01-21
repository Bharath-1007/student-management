import { useEffect, useState } from "react";
import FormInput from "../Components/FormInput";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email,password };
    try {
      const res = await fetch("http://localhost:9090/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const text = await res.text();

      if (res.status === 200) {
        alert(text);
        navigate("/admin/admindashboard");
      } else if (res.status === 401) {
        alert("Invalid email or password");
      } else {
        alert("Server error");
      }
    } catch (err) {
      alert("Backend not running");
    }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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