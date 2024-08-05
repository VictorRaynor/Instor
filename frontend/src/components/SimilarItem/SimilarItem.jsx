import { useEffect, useState } from "react";
import "./SimilarItem.css";
import { Link, Navigate } from "react-router-dom";
import AddBtn from "../AddBtn/AddBtn";

const SimilarItem = (props) => {
  const [userId, setUserId] = useState("64c26f431bef911903662774");

  const [furnitureItem, setFurnitureItem] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    setFurnitureItem(props.furnitureItemData);
  }, [props]);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (furnitureItem)
    return (
      <>
        <div key={furnitureItem._id} className="similiar-furniture-item">
          <Link
            to={`/furniture/${furnitureItem._id}`}
            reloadDocument
            preventScrollReset={true}
          >
            <img
              src={furnitureItem.image.url}
              className="similiar-furniture-img"
            />
          </Link>
          <div className="similiar-furniture-info-container">
            <div>
              <p>{furnitureItem.room}</p>
              <p>{furnitureItem.title}</p>
              <p>Größe: {furnitureItem.size}</p>
            </div>
            <AddBtn furnitureID={furnitureItem._id} userId={userId} />
          </div>
        </div>
      </>
    );
  else {
    return <div>loading</div>;
  }
};

export default SimilarItem;
