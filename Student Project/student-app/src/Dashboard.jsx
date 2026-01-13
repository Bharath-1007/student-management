import { Link, Outlet } from "react-router-dom";
import "./index.css";
function Dashboard() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="p-3 vh-100 text-primary-emphasis bg-primary-subtle border-end border-primary-subtle"
        style={{ width: "250px" }}
      >
        <h5 className="mb-4">Student Portal</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="newform" className="nav-link ">
              <i className="bi bi-plus-circle-fill"></i> New Form
            </Link>
          </li>

          <li className="nav-item">
            <Link to="history" className="nav-link">
             <i class="bi bi-clock-history"></i> History
            </Link>
          </li>
          <li className="nav-item">
            <Link to="status" className="nav-link">
             <i class="bi bi-activity"></i> Status
            </Link>
          </li>

          <li className="nav-item mt-auto">
            <Link to="/" className="nav-link"><i class="bi bi-box-arrow-left"></i>Sing Out</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
