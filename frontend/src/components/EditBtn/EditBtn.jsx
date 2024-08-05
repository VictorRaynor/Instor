// Importiere die 'NavLink'-Komponente aus dem 'react-router-dom'-Modul,
// um eine Link-ähnliche Komponente zu erstellen, die bei Klick auf eine andere Seite navigiert
import { NavLink } from "react-router-dom";

import editbtn from "../../assets/editbtn.svg";
import "./EditBtn.css";
// Definiere die React-Komponente 'EditBtn'
const EditBtn = (props) => {
  return (
    <>
      {/* Verwende die 'NavLink'-Komponente, um den 'Edit'-Button als Link zu definieren,
      der zu der spezifischen Seite '/furniture/${props.furnitureId}' navigiert */}
      <NavLink to={`/furniture/${props.furnitureId}`}>
        <button className="edit-btn">
          <img src={editbtn} alt={props.furnitureId} />
        </button>
      </NavLink>
    </>
  );
};

// Exportiere die 'EditBtn'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default EditBtn;
