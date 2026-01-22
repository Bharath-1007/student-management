import { Outlet, useNavigate } from "react-router-dom";
import Button from "../Components/Button";

function Settings() {
    const navigate = useNavigate();
  return (
    <>
      <h1>Portal Settings</h1>
      <div>Edit Student Accounts</div>
      <div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Add Student</label>
            <Button
              type="button"
              btnclass="btn-primary"
              btnlabel="Add Student"
              onclick={() => navigate("addstudent")}
            />
          </div>
          <div className="col">
            <label htmlFor="">Add Admin</label>
            <Button
              type="button"
              btnclass="btn-primary"
              btnlabel="Add Admin"
              onclick={()=>navigate("addadmin")}
            />
          </div>
          <div className="col">
            <label htmlFor="">Edit Student</label>
            <Button
              type="button"
              btnclass="btn-primary"
              btnlabel="Edit Student"
              onclick={()=>navigate("editstudent")}
            />
          </div>
          <div className="col">
            <label htmlFor="">Edit Admin</label>
            <Button
              type="button"
              btnclass="btn-primary"
              btnlabel="Edit Admin"
            />
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  );
}
export default Settings;
