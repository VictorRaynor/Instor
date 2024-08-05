// Importiere das 'axios'-Modul für HTTP-Anfragen
import axios from "axios";

// Importiere die 'useState'-Hook aus 'react', um den Zustand in der Komponente zu verwalten
import { useState } from "react";
import addsomethingbtn from "../../assets/addsomethingbtn.svg";

// Importiere die CSS-Datei für das Styling der Komponente
import "./CreateFurnitureForm.css";

// Definiere die React-Komponente 'CreateFurnitureForm'
const CreateFurnitureForm = ({
  setRefresh,
  refresh,
  queryKey,
  categoryName,
  setQueryKey,
  setCategoryName,
}) => {
  const [creatingNewItem, setCreatingNewItem] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await axios.post("/api/addFurniture", formData);

    setRefresh(!refresh);
    setQueryKey(queryKey);
    setCategoryName(categoryName);
    console.log(response);

    e.target.reset();
  };

  if (creatingNewItem) {
    return (
      <>
        <div className="new-furniture-form-container">
          <h2>Add new Item</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="TITLE" name="title" required />
            <input type="text" placeholder="ROOM" name="room" required />
            <input type="text" placeholder="SIZE" name="size" required />
            <input
              type="file"
              placeholder="IMAGE"
              name="image"
              required
              className="file-upload-btn"
            />
            <textarea
              className="add-text-input-field"
              placeholder="ADD TEXT"
              name="description"
              required
            />
            <button className="submit-btn" type="submit">
              PUBLISH
            </button>
          </form>
          <button
            className="abortt-btn "
            onClick={() => setCreatingNewItem(false)}
          >
            Abbruch
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <button
          className="add-new-item-btn"
          onClick={() => setCreatingNewItem(true)}
        >
          <img src={addsomethingbtn} />
        </button>
      </>
    );
  }
};

export default CreateFurnitureForm;
