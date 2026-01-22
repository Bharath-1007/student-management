import SideNavBar from "../Components/SideNavBar";
import { Outlet } from "react-router-dom";

export const adminLinks = [
  { path: "dashboard", label: "DashBoard", icon: "bi bi-plus-circle-fill" },
  { path: "history", label: "History", icon: "bi bi-clock-history" },
  { path: "analytics", label: "Analytics", icon: "bi bi-activity" },
  { path: "settings", label: "Settings", icon: "bi bi-activity" },
];

function AdminDashboard() {
  return (
    <div className="d-flex">
      <SideNavBar portalName="Student" links={adminLinks} />
      <div className="flex-grow-1 p-4">
        {/* This is where child routes render */}
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
