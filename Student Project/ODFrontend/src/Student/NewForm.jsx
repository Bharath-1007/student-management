import Button from "../Components/Button";
import FormInput from "../Components/FormInput";

function NewForm()
{
    return(
        <>
        <h3>New On-Duty Application</h3>
        <p>Please fill the details below correctly</p>
        <div className="border rounded p-3">
            <div>
                <i class="bi bi-person-fill"><span>Student Details</span></i>
                <hr />
            </div>

            <div className="row">
                    <div className="col">
                    <label>Full Name</label>
                    <FormInput type="text" />
                    </div>
                    <div className="col">
                        <label>Register Number</label>
                        <FormInput type="number" />
                    </div>
            </div>
            <div className="row">
                <div className="col">
                <label>Select Departartment</label>
                <select className="form-select">
                    <option selected>--Select Deptartment--</option>
                    <option>CSE</option>
                    <option>IT</option>
                    <option>AIDS</option>
                    <option>CSBS</option>
                </select>
                </div>
                <div className="col">
                    <label>Year</label>
                    <select className="form-select">
                        <option selected>--select Year--</option>
                        <option >I</option>
                        <option >II</option>
                        <option >III</option>
                        <option >IV</option>
                    </select>
                </div>
            </div>

            <div>
                <i class="bi bi-file-earmark-text-fill"><span>Request   Details</span></i>
                <hr />
            </div>

            <div className="row">
                <div className="col">
                        <label>Form Date</label>
                        <FormInput type="date"/>
                </div>
                <div className="col">
                        <label>To Date</label>
                        <FormInput type="date"/>
                </div>
            </div>

            <div className="row">
                <label className="col">Reason for OD</label>
                <p className="col">Max 100 letter</p>
                <textarea className="form-control" placeholder="text Here..."></textarea>
            </div>

            <div className="row">
                <div className="col">
                        <label>Class Advisor</label>
                        <select className="form-select">
                            <option>--select Advisor--</option>
                        </select>
                </div>
                <div className="col">
                        <label>Mentor</label>
                        <select className="form-select">
                            <option>--select Mentor--</option>
                        </select>
                </div>
                <div className="col">
                        <label>HOD</label>
                        <select className="form-select">
                            <option>--select HOD--</option>
                        </select>
                </div>
            </div>
        <Button type="submit" btnlabel="Submit" btnclass="btn-primary"/>
        </div>
        </>
    );
}
export default NewForm;