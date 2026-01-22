import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const navigate = useNavigate();
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      regNo: Number(regNo),
      password
    };

    try {
      const res = await fetch("http://localhost:9090/student/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const text = await res.text();

      if (res.status === 200) {
        alert(text);
        navigate("/student/dashboard");
      } else if (res.status === 401) {
        alert("Invalid register number or password");
      } else {
        alert("Server error");
      }
    } catch (err) {
      alert("Backend not running");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Register Number"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default StudentLogin;
