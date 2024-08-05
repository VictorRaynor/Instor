import { useEffect, useState, useContext } from "react";
import addbutton from "../../assets/addbtn.svg";
import "./AddBtn.css";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const AddBtn = (props) => {
  const [furnitureId, setFurnitureId] = useState();
  const { user } = useContext(UserContext);

  const addItemToUser = async () => {
    const furnitureId = props.furnitureID;

    const updateUserItems = await axios.put(
      `/api/addFurnitureToUser/${user?.data?._id}`,
      { _id: user._id, inventoryId: furnitureId }
    );
  };

  useEffect(() => {
    setFurnitureId(props.furnitureID);
  }, [props]);

  return (
    <>
      <button className="add-to-wishlist-btn" onClick={addItemToUser}>
        <img src={addbutton} alt={furnitureId} />
      </button>
    </>
  );
};

export default AddBtn;
