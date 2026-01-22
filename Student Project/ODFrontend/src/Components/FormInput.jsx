function FormInput({ type, value, onChange }) {
  return (
    <>
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
}
export default FormInput;
