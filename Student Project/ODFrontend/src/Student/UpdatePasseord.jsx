import { useNavigate } from "react-router-dom";
import FormInput from "../Components/FormInput";
import Button from "../Components/Button";
import { useState , useEffect } from 'react';

function UpdatePassword() {
  const naviate = useNavigate();
  const [registernumber,setRegisternumber]=useState("");
  const [newpassword,setNewpassword]=useState("");
  const [confirmpassword,setConfirmpassword]=useState("");
  const [confirmerror, setConfirmError] = useState("");
  const [passworderror, setPasswordError] = useState("");
 function handleSubmit(e)
  {
      e.preventDefault();
    console.log(registernumber);
    console.log(newpassword);
    console.log(confirmpassword);  
    naviate("/student/login") 
 }

const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

 const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmpassword(value);

    if (value !== newpassword) {
      setConfirmError("Passwords do not match");
    } else {
      setConfirmError("");
    }
  };

  const handleNewPassword = (e) => {
    const value = e.target.value;
    setNewpassword(value);

    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters with uppercase, lowercase, number & special character"
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center full-height">
        <div className=" shadow p-5 rounded" style={{ width: "400px" }}>
          <h4>Update Password</h4>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label>Register Number:</label>
                            <FormInput 
                                type={"number"} 
                                value={registernumber}
                                onChange={(e) => setRegisternumber(e.target.value)}
                            />
                            
                    </div>
                    <div>
                        <label>New Password:</label>
                            <FormInput 
                                type={"password"} 
                                value={newpassword}
                                onChange={handleNewPassword}
                            />
                            
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <FormInput 
                            type={"password"} 
                            value={confirmpassword}
                            onChange={handleConfirmPassword}
                        />
                    </div>
                    <div>
                        <Button type={"submit"}
                        btnclass="btn-primary"
                        btnlabel="save"
                        />
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  );
}
export default UpdatePassword;