import { useNavigate } from "react-router-dom";

import backbtngrey from "../../assets/backbtngrey.svg";
import "./BackButtonGrey.css";

const BackButtonGrey = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1, { relative: "path" });
  };

  return (
    <>
      <button onClick={goBack} className="back-btn-grey">
        <img src={backbtngrey} alt="Back" />
      </button>
    </>
  );
};

export default BackButtonGrey;
