import Button from "../Components/Button";
import FormInput from "../Components/FormInput";

function AddStudent() {
  return (
    <>
      <h3>Add New Student</h3>
        <input type="file" />
      <div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Full Name</label>
            <FormInput type="text" />
          </div>
          <div className="col">
            <label htmlFor="">Register Number</label>
            <FormInput type="number" />
          </div>
          <div className="col">
            <label htmlFor="">Year</label>
            <select className="form-select">
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
          <select className="form-select">
            <option value="">--Select Department--</option>
            <option value="">CSE</option>
            <option value="">IT</option>
            <option value="">CSBS</option>
            <option value="">AIDS</option>
            <option value="">EEE</option>
          </select>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Mail</label>
            <FormInput type="email" />
          </div>
          <div className="col">
            <label htmlFor="">Phone</label>
            <FormInput type="number" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Create Password</label>
            <FormInput type="password" />
          </div>
          <div className="col">
            <label htmlFor="">Confirm Password</label>
            <FormInput type="password" />
          </div>
        </div>
        <Button btnlabel="Submit" btnclass="btn-primary" />
      </div>
    </>
  );
}
export default AddStudent;
