import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import AddBtn from "../AddBtn/AddBtn";
import EditBtn from "../EditBtn/EditBtn";
import { Link } from "react-router-dom";

import "./MyFurnitureSlider.css";

const MyFurnitureSlider = (props) => {
  const userInventory = props.userData.inventory;
  const [smallStuffData, setSmallStuffData] = useState([]);
  const [middleStuffData, setMiddleStuffData] = useState([]);
  const [bigStuffData, setBigStuffData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof userInventory !== "undefined") {
          const promises = userInventory.map(async (element) => {
            const { data } = await axios.get(`/api/furniture/${element}`);
            return data;
          });
          // console.log("Check Datastream:", promises);
          const userFurnitureData = await Promise.all(promises);
          const smallFurniture = userFurnitureData.filter(
            (item) => item.size === "klein"
          );
          const mediumFurniture = userFurnitureData.filter(
            (item) => item.size === "mittel"
          );
          const largeFurniture = userFurnitureData.filter(
            (item) => item.size === "gross"
          );

          setSmallStuffData(smallFurniture);
          setMiddleStuffData(mediumFurniture);
          setBigStuffData(largeFurniture);
          setLoading(false);
        } else {
          return <div>Keine Daten gespeichert</div>;
        }
      } catch (error) {
        console.error("Error fetching furniture data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userInventory]);

  //   NACHEINANDER
  // useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         if (typeof userInventory !== "undefined") {
  //           const smallFurniture = [];
  //           const mediumFurniture = [];
  //           const largeFurniture = [];

  //           for (const element of userInventory) {
  //             const { data } = await axios.get(`/api/furniture/${element}`);

  //             // Hier werden die Möbelstücke entsprechend ihrer Größe in die jeweiligen Arrays sortiert.
  //             if (data.size === "klein") {
  //               smallFurniture.push(data);
  //             } else if (data.size === "mittel") {
  //               mediumFurniture.push(data);
  //             } else if (data.size === "gross") {
  //               largeFurniture.push(data);
  //             }
  //           }

  //           setSmallStuffData(smallFurniture);
  //           setMiddleStuffData(mediumFurniture);
  //           setBigStuffData(largeFurniture);
  //           setLoading(false);
  //         } else {
  //           return <div>Keine Daten gespeichert</div>;
  //         }
  //       } catch (error) {
  //         console.error("Error fetching furniture data:", error);
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, [userInventory]);

  // Check if data is still loading
  if (loading) {
    return <div>Loading...</div>; // Or any other loading indicator you prefer
  }

  return (
    <section className="user-furnituer-list-container">
      <h2 className="size-title">Small Furniture:</h2>
      <div className="small-furniture-container">
        {smallStuffData.map((furniture) => (
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
          </div>
        ))}
      </div>
      <h2 className="size-title">Medium Furniture:</h2>
      <div className="medium-furniture-container">
        {middleStuffData.map((furniture) => (
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
          </div>
        ))}
      </div>
      <h2 className="size-title">Large Furniture:</h2>
      <div className="large-furniture-container">
        {bigStuffData.map((furniture) => (
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyFurnitureSlider;
