import { Link } from "react-router-dom";

function SideNavBar({ links,portalName }) {
  return (
    <div className="p-3 vh-100 bg-primary-subtle border-end" style={{ width: "250px" }}>
      <h5 className="mb-4">{portalName} Portal</h5>
      <ul className="nav flex-column">
        {links.map((link, idx) => (
          <li className="nav-item" key={idx}>
            <Link to={link.path} className="nav-link">
              <i className={link.icon}></i> {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNavBar;
