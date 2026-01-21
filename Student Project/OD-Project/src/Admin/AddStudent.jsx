import { useState } from "react";
import Button from "../Components/Button";
import FormInput from "../Components/FormInput";

function AddStudent() {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [dept, setDept] = useState("");
  const [phone, setPhone] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [regNoError, setRegNoError] = useState("");
  const [emailError, setEmailError] = useState("");

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const regNoRegex = /^6112\d+$/; // must start with 6112
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function check() {
    if (!regNoRegex.test(regNo)) {
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
      regNo: Number(regNo),
      phone,
      dept,
      year,
      email,
      password: createPassword,
    };

    fetch("http://localhost:9090/student/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    })
      .then((res) => res.text())
      .then(() => {
        alert("Student Added successfully");

        setName("");
        setRegNo("");
        setEmail("");
        setDept("");
        setPhone("");
        setYear("");
        setCreatePassword("");
        setConfirmPassword("");
        setPassword("");
      })
      .catch((err) => console.error(err));
  }
  return (
    <>
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="row">
            <div className="col">
              <label htmlFor="">Full Name</label>
              <FormInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="">Register Number</label>
              <FormInput
                type="number"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="">Year</label>
              <select
                className="form-select"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option>--select Year--</option>
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
              </select>
            </div>
          </div>
          <div>
            <label>Department</label>
            <select
              className="form-select"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
            >
              <option value="">--Select Department--</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="CSBS">CSBS</option>
              <option value="AIDS">AIDS</option>
              <option value="EEE">EEE</option>
            </select>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="">Email</label>
              <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <small className="text-danger">{emailError}</small>
              )}
            </div>
            <div className="col">
              <label htmlFor="">Phone</label>
              <FormInput
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="">Create Password</label>
              <FormInput
                type="password"
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="">Confirm Password</label>
              <FormInput
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          {passwordError && (
            <small className="text-danger">{passwordError}</small>
          )}
        </div>
        <Button btnlabel="Submit" btnclass="btn-primary" />
      </form>
    </>
  );
}
export default AddStudent;
