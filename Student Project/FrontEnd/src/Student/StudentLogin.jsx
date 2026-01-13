import { useState } from "react";
import FormInput from "../Components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";

function StudentLogin() {
  const navigate = useNavigate();
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = { regNo, password };

    fetch("http://localhost:8080/student/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid credentials");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Login success:", data);
        navigate("/student/dashboard");
      })
      .catch((err) => {
        console.error("Login failed:", err.message);
        alert("Login failed. Please check your credentials.");
      });
  };


  return (
    <div className="d-flex justify-content-center align-items-center full-height">
  <div className="register-box shadow p-5 rounded" style={{ width: "400px" }}>
    <h4 className="text-center mb-4">Student Login</h4>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="registerNumber" className="form-label">
          Enter Register Number
        </label>
        <FormInput
          type={"number"}
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

    <div>
        <Button type={"submit"}
        btnclass="btn-primary"
        btnlabel="Login"
        />
      </div>
    </form>
    <div className="mt-3">
    <p><Link to="/student/updatepassword">Forgot Password?</Link></p>
    </div>
  </div>
</div>
  );
}

export default StudentLogin;
