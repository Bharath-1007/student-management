import SideNavBar from "../Components/SideNavBar";
import { Outlet } from "react-router-dom";

export const studentLinks = [
  { path: "newform", label: "New Request", icon: "bi bi-plus-circle-fill" },
  { path: "history", label: "History", icon: "bi bi-clock-history" },
  { path: "status", label: "Status", icon: "bi bi-activity" },
];

function Dashboard() {
  return (
    <div className="d-flex">
      <SideNavBar portalName="Student" links={studentLinks} />
      <div className="flex-grow-1 p-4">
        {/* This is where child routes render */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
