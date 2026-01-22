import { useNavigate } from "react-router-dom";

function RoleCard({ imgSrc, altText, buttonLabel, buttonClass, navigateTo }) {
    const navigate = useNavigate();
    
    return (
    <div className="d-flex align-items-center justify-content-between">
      <img src={imgSrc} alt={altText} style={{width:"30%"}} />
      <button
        className={`btn ${buttonClass}`}
        onClick={() => navigate(navigateTo)}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default RoleCard;