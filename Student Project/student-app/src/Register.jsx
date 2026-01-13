import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./index.css";
function Register() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");

  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [regNoError, setRegNoError] = useState("");
  const [emailError, setEmailError] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const regNoRegex = /^6112\d+$/; // must start with 6112
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function check() {
    if (role === "student" && !regNoRegex.test(regNo)) {
      setRegNoError("Register number must start with 6112");
      return false;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
      return false;
    }

    if (!passwordRegex.test(createPassword)) {
      setPasswordError(
        "Password must be at least 8 characters with uppercase, lowercase, number & special character"
      );
      return false;
    }

    if (createPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }

    setPassword(createPassword);
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!check()) return;

    const registerData = {
      name,
      regNo,
      email,
      password: createPassword,
    };

    fetch("http://localhost:8080/student/student_register/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Data submitted successfully");

        setName("");
        setRegNo("");
        setEmail("");
        setCreatePassword("");
        setConfirmPassword("");
        setPassword("");

        //navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center full-height">
      <div className="register-box shadow">
        <h4 className="text-center mb-4">
          {role === "student" ? "Student Register" : "Admin Register"}
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {role === "student" && (
            <div className="mb-3">
              <label className="form-label">Register Number</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter reg no"
                value={regNo}
                onChange={(e) => {
                  setRegNo(e.target.value);
                  setRegNoError("");
                }}
                required
              />
              {regNoError && (
                <small className="text-danger">{regNoError}</small>
              )}
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              required
            />
            {emailError && (
              <small className="text-danger">{emailError}</small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter password"
              value={createPassword}
              onChange={(e) => {
                setCreatePassword(e.target.value);
                setPasswordError("");
              }}
              required
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordError("");
              }}
              required
            />
          </div>

          {passwordError && (
            <small className="text-danger">{passwordError}</small>
          )}

          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-danger px-4 rounded" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;