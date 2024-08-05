// Importiere die Funktion 'useNavigate' aus dem 'react-router-dom'-Modul,
// die für die Navigation in der React-App verwendet wird
import { useNavigate } from "react-router-dom";

import "./BackButton.css";

const BackButton = (props) => {
  // Verwende die 'useNavigate'-Hook, um die 'navigate'-Funktion für die Navigation zu erhalten
  const navigate = useNavigate();

  // Definiere die Funktion 'goBack', die aufgerufen wird, wenn der Zurück-Button geklickt wird
  const goBack = () => {
    // Navigiere zurück zur vorherigen Seite (eine Stelle in der History zurück)
    navigate(-1, { relative: "path" });
  };

  return (
    <>
      <button onClick={goBack} className="back-btn">
        <img src={props.arrow} alt="Back" />
        <p>Back</p>
      </button>
    </>
  );
};

export default BackButton;
