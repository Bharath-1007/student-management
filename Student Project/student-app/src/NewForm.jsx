import { useState } from "react";
import dept from "./object/departments";
import staff from "./object/staff"; // 'it' import was unused, removed

// s_no, advisor, dept, from_date, hod, mentor, name, reason, reg_no, to_date, timestamp
function NewForm() {
  const [deptName, setDeptName] = useState("");
  const [advisorName, setAdvisorName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [hodName, setHodName] = useState("");
  const [mentorName, setMetorName] = useState("");
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [year, setYear] = useState("");
  const [regNo, setRegNo] = useState("");

  function handle(e) {
    e.preventDefault(); // prevent page reload

    const newFormData = {
      name,
      advisorName,
      deptName,
      fromDate,
      toDate,
      mentorName,
      hodName,
      reason,
      regNo,
      year,
    };

    fetch("http://localhost:8080/student/student_register/newform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFormData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Form Submitted");
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <p>Student</p>
      <hr />
      <div>
        <h1>New On-Duty Application</h1>
        <p>Please fill in the details below for admin approval.</p>
      </div>
      <div>
        <p>STUDENT DETAILS</p>
        <hr />
        <form onSubmit={handle}>
          <div className="row">
            <div className="col">
              <h5>Full Name</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="col">
              <h5>Register Number</h5>
              <input
                type="number"
                className="form-control"
                placeholder="Ex-611223205001"
                onChange={(e) => setRegNo(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h5>Department</h5>
              <select
                className="form-select"
                onChange={(e) => setDeptName(e.target.value)}
                required
              >
                <option value="">--Select Department--</option>
                {dept.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <h5>Year</h5>
              <select
                className="form-select"
                onChange={(e) => setYear(e.target.value)}
                required
              >
                <option value="">--Select Year--</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
              </select>
            </div>
          </div>

          <p>REQUEST DETAILS</p>
          <hr />

          <div className="row">
            <div className="col">
              <h5>From Date</h5>
              <input
                type="date"
                onChange={(e) => setFromDate(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="col">
              <h5>To Date</h5>
              <input
                type="date"
                onChange={(e) => setToDate(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>

          <h5>Reason</h5>
          <textarea
            className="form-control"
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>

          <div className="row">
            <div className="col">
              <h5>Class Advisor</h5>
              <select
                className="form-select"
                onChange={(e) => setAdvisorName(e.target.value)}
                disabled={!deptName}
                required
              >
                <option value="">--Select--</option>
                {(staff[deptName]?.advisor || []).map((n, idx) => (
                  <option key={idx} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="col">
              <h5>Mentor</h5>
              <select
                className="form-select"
                onChange={(e) => setMetorName(e.target.value)}
                disabled={!deptName}
                required
              >
                <option value="">--Select--</option>
                {(staff[deptName]?.mentor || []).map((n, i) => (
                  <option key={i} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="col">
              <h5>HOD</h5>
              <select
                className="form-select"
                onChange={(e) => setHodName(e.target.value)}
                disabled={!deptName}
                required
              >
                <option value="">--Select--</option>
                {(staff[deptName]?.hod || []).map((n, i) => (
                  <option key={i} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-center">
            <input type="submit" className="btn btn-primary w-50" />
          </div>
        </form>
      </div>
    </>
  );
}

export default NewForm;