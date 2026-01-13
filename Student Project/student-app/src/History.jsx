import { useEffect, useState } from "react";
import "./index.css";
function History() {
  const [regNo, setRegNo] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [display, setDiaplay] = useState([]);
  function clear() {
    setRegNo("");
    setStatus("");
    setDate("");
  }

  function details() {
    const s = {
      regNo,
    };
    fetch("http://localhost:8080/student/student_register/history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(s),
    })
      .then((res) => res.json())
      .then((data) => setDiaplay(data))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <p>student</p>
      <hr />
      <h2>OD Request History</h2>
      <p>Track your submitted OD applications.</p>

      <div>
        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control no-arrows"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              placeholder="Search by register number"
            />
          </div>

          <div className="col">
            <button className="btn btn-success" onClick={details}>
              Search
            </button>
          </div>

          <div className="col">
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option selected>Status: all</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>

          <div className="col">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col">
            <button className="btn btn-primary" onClick={clear}>
              Clear Filter
            </button>
          </div>
        </div>
      </div>
<hr />
      <div>
        <h3>Student Details</h3>
        <table border={1} cellPadding={8} className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Register No</th>
              <th>Department</th>
              <th>Date</th>
              <th>Reason</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {display.length > 0 ? (
              display.map((display, i) => (
                <tr key={i}>
                  <td>{display.name} <br />Year:{display.year}</td>
                  <td>{display.regNo}</td>
                  <td>{display.deptName}</td>
                  <td>{display.fromDate}<br/>{display.toDate}</td>
                  <td>{display.reason}</td>
                  <td><i class="bi bi-eye"></i></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default History;
