import { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import "./index.css";
function Login() {
  const navigate = useNavigate();
  const { role } = useParams();

  const [reg_no, setReg_no] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    let url = "";
    let loginData = {};

    if (role === "student") {
      url = "http://localhost:8080/student/student_register/login";
      loginData = {
        regNo: reg_no,
        password: password,
      };
    } else {
      url = "http://localhost:8080/admin/login";
      loginData = {
        email: email,
        password: password,
      };
    }
    
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then(async (res) => {
        const text = await res.text(); // ✅ plain text

        if (res.ok) {
          setIsError(true);
          setMessage(text);
          alert("Login Successfully.");
          if (role === "student") navigate("/student/dashboard");
          else navigate("/admin/dashboard");
        } 
        else {
          setIsError(false);
          setMessage(text);
          alert(text || "Invalid Credentials");
        }
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
        setMessage("Server error. Try again later.");
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center full-height">
      <div className="register-box shadow">
        <h4 className="text-center mb-4">
          {role === "admin" ? "Admin Login" : "Student Login"}
        </h4>
        <form onSubmit={handleSubmit}>
          {role === "student" ? (
            <div>
              <label htmlFor="" className="form-label">
                Register Number
              </label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => setReg_no(e.target.value)}
                required
              />
            </div>
          ) : (
            <div>
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" required />
            </div>
          )}
          <div>
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-primary px-4 rounded" type="submit">
              Login
            </button>
          </div>
          {message && (
            <div className="text-center mt-2">
              <small className={isError ? "text-success" : "text-danger"}>
                {message}
              </small>
            </div>
          )}

          <div className="text-center mt-4">
            <h6>
              Don't have a account?
              <Link to={`/${role}/register`}>Register</Link>
            </h6>
            <h6>
              <Link to={`/${role}/forgotpassword`}>Forgot Password</Link>
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
