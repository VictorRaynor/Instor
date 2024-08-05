// Importiere das 'axios'-Modul für HTTP-Anfragen
import axios from "axios";
import "./CreateUserForm.css";
// Importiere die CSS-Datei für das Styling der Komponente
import "./CreateFurnitureForm.css";
import { Link } from "react-router-dom";
import BackButtonGrey from "../BackButtonGrey/BackButtonGrey";

// Definiere die React-Komponente 'CreateFurnitureForm'
const CreateUserForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await axios.post("/api/signup", formData);
    console.log(response);
    e.target.reset();
  };

  return (
    <>
      <div className="login-user-form-container">
        <div className="login-title-container">
          <BackButtonGrey />
          <h1>Sign up</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-fields-container">
            <input
              type="text"
              placeholder="Dein Username beginnend mit einem @"
              name="userhandle"
              required
            />
            <input type="text" placeholder="Dein Name" name="name" required />
            <input type="file" placeholder="Dein Profilbild" name="image" />
            <textarea
              className="add-text-input-field"
              placeholder="Eine kurze Beschreibung über dich"
              name="description"
              required
            />
            <input
              type="email"
              placeholder="Deine Emailadresse"
              name="email"
              required
            />
            <input
              type="password"
              placeholder="Dein Password"
              name="password"
              required
            />
            <button className="submit-btn" type="submit">
              Registrieren
            </button>
            <Link to="/login">
              <button className="to-login-btn">Zum Login</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

// Exportiere die 'CreateFurnitureForm'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default CreateUserForm;
