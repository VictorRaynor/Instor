// Importiere die 'useState'-Hook aus 'react', um den Zustand in der Komponente zu verwalten
import { useState } from "react";
import editbtn from "../../assets/editbtn.svg";

// Importiere das 'axios'-Modul für HTTP-Anfragen
import axios from "axios";

// Importiere die CSS-Datei für das Styling der Komponente
import "./UpdateBtn.css";

// Definiere die React-Komponente 'UpdateBtn'
const UpdateBtn = ({ itemKeyName, setRefresh, id }) => {
  // Verwende die 'useState'-Hook, um den Zustand 'isEditing' mit dem anfänglichen Wert 'false',
  // den Zustand 'newTxt' mit dem anfänglichen Wert '' und den Zustand 'selectedImage' mit dem anfänglichen Wert 'null' zu initialisieren
  const [isEditing, setIsEditing] = useState(false);
  const [newTxt, setNewTxt] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // Funktion, um das ausgewählte Bild zu setzen, wenn ein Dateieingabefeld ausgewählt wird
  const handleFileInputChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  // Funktion, um das Update zu starten, je nachdem, ob es sich um eine Bild- oder Textaktualisierung handelt
  const startUpdating = async () => {
    try {
      if (itemKeyName === "img" && selectedImage) {
        const formData = new FormData();
        formData.append("image", selectedImage);
        await imgUpdating(formData);
      } else if (itemKeyName !== "img") {
        await textUpdating();
      }

      setIsEditing(false);
      setRefresh((prev) => !prev);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // Funktion, um das Bild zu aktualisieren
  const imgUpdating = async (formData) => {
    try {
      await axios.put(`/api/updateFurniture/${id}`, formData);
    } catch (error) {
      console.log(error);
    }
  };

  // Funktion, um den Text zu aktualisieren
  const textUpdating = async () => {
    try {
      const response = await axios.put(`/api/updateFurniture/${id}`, {
        [itemKeyName]: newTxt,
      });

      console.log("Update response:", response.data);
    } catch (error) {
      console.log("Error updating furniture:", error);
    }
  };

  // Wenn sich der Bearbeitungsmodus ('isEditing') aktiviert hat
  if (isEditing) {
    if (
      itemKeyName === "title" ||
      itemKeyName === "room" ||
      itemKeyName === "size"
    ) {
      // Input-Feld für die Bearbeitung des Titels, des Raums oder der Größe
      return (
        <div className="update-btn-container">
          <input
            type="text"
            name={itemKeyName}
            value={newTxt}
            onChange={(e) => setNewTxt(e.target.value)}
            placeholder={`Bitte geben den neuen ${itemKeyName}`}
          />
          <button onClick={startUpdating}>Änderungen speichern</button>
          <button onClick={() => setIsEditing(false)}>Abbrechen</button>
        </div>
      );
    } else if (itemKeyName === "description") {
      // Textarea-Feld für die Bearbeitung der Beschreibung
      return (
        <div className="update-btn-container">
          <textarea
            name={itemKeyName}
            value={newTxt}
            onChange={(e) => setNewTxt(e.target.value)}
            placeholder="Bitte gebe den neuen Content ein"
          />
          <button onClick={startUpdating}>Änderungen speichern</button>
          <button onClick={() => setIsEditing(false)}>Abbrechen</button>
        </div>
      );
    } else if (itemKeyName === "img") {
      // Input-Feld für die Bearbeitung des Bildes
      return (
        <div className="update-btn-container">
          <div className="update-furniture-form-container">
            <form className="create-post-form-container">
              <input
                type="file"
                placeholder="Image"
                name="image"
                required
                onChange={handleFileInputChange}
              />
              <button type="button" onClick={startUpdating}>
                Änderungen speichern
              </button>
            </form>
            <button onClick={() => setIsEditing(false)}>Abbrechen</button>
          </div>
        </div>
      );
    }
  } else {
    // Ansonsten, wenn sich der Bearbeitungsmodus nicht aktiviert hat, zeige den 'Edit'-Button an
    return (
      <>
        <button className="update-btn" onClick={() => setIsEditing(true)}>
          <img src={editbtn}></img>
        </button>
      </>
    );
  }
};

// Exportiere die 'UpdateBtn'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default UpdateBtn;
