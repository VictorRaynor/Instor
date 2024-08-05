import { useState, useEffect } from "react";
import axios from "axios";
import deletebtn from "../../assets/deletebtn.svg";
import "./DeleteBtn.css";

// Definiere die React-Komponente 'EditBtn'
const DeleteBtn = ({
  furnitureId,
  refresh,
  setRefresh,
  setQueryKey,
  setCategoryName,
  queryKey,
  categoryName,
}) => {
  const [itemId, setItemId] = useState(furnitureId);
  const deleteItem = async () => {
    const data = await axios.delete(`/api/deleteFurniture/${itemId}`);
    if (
      (typeof setRefresh === "function") |
      (typeof setQueryKey === "function") |
      (typeof setCategoryName === "function")
    ) {
      setRefresh(!refresh);
      setQueryKey(queryKey);
      setCategoryName(categoryName);
    }
  };

  return (
    <>
      {/* Verwende die 'NavLink'-Komponente, um den 'Edit'-Button als Link zu definieren,
      der zu der spezifischen Seite '/furniture/${props.furnitureId}' navigiert */}

      <button onClick={deleteItem} className="delete-btn">
        <img src={deletebtn} alt={furnitureId} />
      </button>
    </>
  );
};

// Exportiere die 'EditBtn'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default DeleteBtn;
