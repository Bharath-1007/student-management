import RoleCard from "./Components/RoleCard";
import "./App.css";
function RoleAccess() {
  return (
    <div className="d-flex justify-content-center align-items-center full-height">
      <div className="register-box">
        <h4 className="text-center mb-4">Role Access</h4>

        <RoleCard
          imgSrc="student.jpg"
          altText="Student"
          buttonLabel="Student Login"
          buttonClass="btn-primary"
          navigateTo="/student/login"
        />

        <RoleCard
          imgSrc="Admin.jpg"
          altText="Admin"
          buttonLabel="Admin Login"
          buttonClass="btn-success"
          navigateTo="/admin/login"
        />
      </div>
    </div>
  );
}

export default RoleAccess;