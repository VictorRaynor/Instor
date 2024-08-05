// Importiere die 'useEffect' und 'useState'-Hooks aus 'react', um den Zustand in der Komponente zu verwalten
import { useEffect, useState } from "react";

import EditBtn from "../EditBtn/EditBtn";

// Importiere die CSS-Datei für das Styling der Komponente
import "./FurnitureItem.css";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import AddBtn from "../AddBtn/AddBtn";

import { Link } from "react-router-dom";

// Definiere die React-Komponente 'FurnitureItem'
const FurnitureItem = ({
  data,
  refresh,
  setRefresh,
  queryKey,
  categoryName,
  setQueryKey,
  setCategoryName,
}) => {
  // Verwende die 'useState'-Hook, um den Zustand 'furnitureData' zu initialisieren
  // mit dem anfänglichen Wert 'props.data', das die Möbelstück-Daten enthält
  const [furnitureData, setFurnitureData] = useState(data);

  const [userId, setUserId] = useState("64c26f431bef911903662774");

  // Verwende die 'useEffect'-Hook, um den Zustand 'furnitureData' zu aktualisieren,
  // wenn sich die Prop 'props.data' ändert
  useEffect(() => {
    setFurnitureData(data);
  }, [data]);

  return (
    <>
      <section className="furniture-item-container">
        {furnitureData?.map((furniture) => (
          <div key={furniture._id} className="furniture-item">
            <Link to={`/furniture/${furniture._id}`}>
              <div
                className="furniture-img-container"
                style={{ backgroundImage: `url(${furniture.image.url})` }}
              ></div>
            </Link>
            <div className="descr-container">
              <p>{furniture.room}</p>
              <h2>{furniture.title}</h2>
              <p>Beschreibung</p>
              <p className="descr-txt">{furniture.description}</p>
              <p>Größe: {furniture.size}</p>
            </div>
            <div className="button-container">
              <EditBtn furnitureId={furniture._id} />
              <DeleteBtn
                furnitureId={furniture._id}
                setRefresh={setRefresh}
                refresh={refresh}
                queryKey={queryKey}
                categoryName={categoryName}
                setQueryKey={setQueryKey}
                setCategoryName={setCategoryName}
              />
              <AddBtn furnitureID={furniture._id} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

// Exportiere die 'FurnitureItem'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default FurnitureItem;
