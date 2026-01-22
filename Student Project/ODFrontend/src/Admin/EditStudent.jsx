import Button from "../Components/Button";
import FormInput from "../Components/FormInput";

function EditStudent()
{
    return(
        <>
        <div>
            <label htmlFor="">Enter Register Number</label>
            <FormInput type="number"/>
            <Button btnlabel="Search" btnclass="btn-primary"/>
        </div>
        </>
    );
}
export default EditStudent;