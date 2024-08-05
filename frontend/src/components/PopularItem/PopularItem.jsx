import { useEffect, useState } from "react";
import "./PopularItem.css";
import { Link } from "react-router-dom";
import AddBtn from "../AddBtn/AddBtn";

const PopularItem = (props) => {
  const [userId, setUserId] = useState("64c26f431bef911903662774");

  const [furnitureItem, setFurnitureItem] = useState();

  useEffect(() => {
    setFurnitureItem(props.furnitureItemData);
  }, [props]);

  if (furnitureItem)
    return (
      <>
        <div key={furnitureItem._id} className="popular-furniture-item">
          <Link to={`/furniture/${furnitureItem._id}`}>
            <img
              src={furnitureItem.image.url}
              className="popular-furniture-img"
            />
          </Link>
          <div className="popular-furniture-info-container">
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

export default PopularItem;
