import { useEffect, useState, useContext } from "react";
import "./PopularArticlesGrid.css";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

import PopularItem from "../PopularItem/PopularItem";

const PopularArticlesGrid = (props) => {
  const { isLoggedIn } = useContext(UserContext);
  const [allfurnitures, setAllFurnitures] = useState();

  useEffect(() => {
    if (isLoggedIn) {
      const fetchData = async () => {
        const { data } = await axios.get("/api/furniture");
        setAllFurnitures(data);
      };
      fetchData();
    }
  }, []);

  return (
    <>
      {!isLoggedIn && <> </>}
      {isLoggedIn && (
        <section className="popular-furniture-container">
          <h2>Beliebt</h2>
          <div className="popular-furniture-grid">
            {allfurnitures?.map((furniture) => (
              <PopularItem key={furniture._id} furnitureItemData={furniture} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default PopularArticlesGrid;
