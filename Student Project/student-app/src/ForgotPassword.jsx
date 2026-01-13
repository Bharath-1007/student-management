import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./index.css";
function ForgotPassword() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  // ✅ NEW PASSWORD HANDLER
  const handleNewPassword = (e) => {
    const value = e.target.value;
    setNewpassword(value);

    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters with uppercase, lowercase, number & special character"
      );
    } else {
      setPasswordError("");
    }
  };

  // ✅ CONFIRM PASSWORD HANDLER
  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmpassword(value);

    if (value !== newpassword) {
      setConfirmError("Passwords do not match");
    } else {
      setConfirmError("");
    }
  };

  // ✅ SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordError || confirmError) return;

    const updatePassword = {
      regNo,
      password: newpassword,
    };

    fetch("http://localhost:8080/student/student_register/update/password", {
      method: "PUT", // ✅ MUST BE PUT
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatePassword),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Update failed");
        return res.text();
      })
      .then(() => {
        alert("Password updated successfully");
        navigate(`/${role}/login`);
      })
      .catch(() => {
        alert("Failed to update password");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center full-height">
      <div className="register-box shadow p-4">
        <h4 className="text-center mb-4">Forgot Password</h4>

        <form onSubmit={handleSubmit}>
          {role === "student" ? (
            <div className="mb-3">
              <label className="form-label">Register Number</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter reg no"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                required
              />
            </div>
          ) : (
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter new password"
              value={newpassword}
              onChange={handleNewPassword}
              required
            />
            {passwordError && (
              <small className="text-danger">{passwordError}</small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={handleConfirmPassword}
              required
            />
            {confirmError && (
              <small className="text-danger">{confirmError}</small>
            )}
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-warning px-4 rounded"
              disabled={passwordError || confirmError}
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
