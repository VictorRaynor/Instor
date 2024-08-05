import { useEffect, useState } from "react";
import axios from "axios";
import MyFurnitureSlider from "../MyFurnitureSlider/MyFurnitureSlider";
import SimilarItem from "../SimilarItem/SimilarItem";
import "./SimiliarProductGrid.css";

const SimilarProductGrid = (props) => {
  const [similarProductCategory, setSimilarProductCategory] = useState([]);
  const [similarProductData, setSimiliarProductData] = useState();

  useEffect(() => {
    setSimilarProductCategory(props.similarProducts);
  }, [props.similarProducts]);

  useEffect(() => {
    if (typeof similarProductCategory !== "undefined") {
      const fetchData = async () => {
        const data = await axios.get("/api/furniture", {
          params: { ["room"]: similarProductCategory },
        });
        setSimiliarProductData(data.data);
      };
      fetchData();
    }
  }, [props, similarProductCategory]);
  return (
    <>
      <section className="similiar-product-grid-container">
        <h2>Ähnliche Produkte</h2>

        <div className="similar-furniture-grid">
          {similarProductData?.map((furniture) => (
            <SimilarItem
              key={furniture._id}
              furnitureItemData={furniture}
              updateRefresh={props.updateRefresh}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SimilarProductGrid;
