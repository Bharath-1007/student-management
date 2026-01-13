function Button({type,btnclass,btnlabel,onclick}) {
  return (
    <>
      <button
        type={type}
        className={`btn ${btnclass} w-100 mt-3`}
        onClick={onclick}
        >
            {btnlabel}
        </button>
    </>
  );
}
export default Button;