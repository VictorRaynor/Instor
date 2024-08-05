import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdateBtn from "../../components/UpdateBtn/UpdateBtn";
import "./DetailPage.css";
import BackButton from "../../components/BackButton/BackButton";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";
import TabBtn from "../../components/TabBtn/TabBtn";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import PopularArticlesGrid from "../../components/PopularArticlesGrid/PopularArticlesGrid";
import SimilarProductGrid from "../../components/SimilarProductGrid/SimilarProductGrid";
import btnImg from "../../assets/backbtntrans.svg";

const Detailpage = () => {
  const params = useParams();
  const idFurniture = params.id;

  const [furniture, setFurniture] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/furniture/${idFurniture}`);
      setFurniture(data);
    };
    fetchData();
  }, [refresh]);
  const updateRefresh = () => {
    window.scrollTo(0, 0);
    setRefresh((prevRefresh) => !prevRefresh);
  };
  return (
    <>
      <Header />
      <main>
        <section className="details-container">
          <div className="img-outer-container">
            <div
              className="img-with-update-container"
              style={{ backgroundImage: `url(${furniture.image?.url})` }}
            >
              <BackButton arrow={btnImg} />
              <UpdateBtn
                itemKeyName={"img"}
                id={idFurniture}
                setRefresh={setRefresh}
              />
            </div>
          </div>
          <div className="text-outer-container">
            <div className="room-with-update-container">
              <p>{furniture.room}</p>
              <UpdateBtn
                itemKeyName={"room"}
                id={idFurniture}
                setRefresh={setRefresh}
              />
            </div>
            <div className="title-with-update-container">
              <h2>{furniture.title}</h2>
              <UpdateBtn
                itemKeyName={"title"}
                id={idFurniture}
                setRefresh={setRefresh}
              />
            </div>
            <div className="size-with-update-container">
              <p>Größe: {furniture.size}</p>
              <UpdateBtn
                itemKeyName={"size"}
                id={idFurniture}
                setRefresh={setRefresh}
              />
            </div>
            <ReviewBox />
            <div className="description-with-update-container">
              <TabBtn />
              <div className="description-with-update-inner-container">
                <p> {furniture.description}</p>
                <UpdateBtn
                  itemKeyName={"description"}
                  id={idFurniture}
                  setRefresh={setRefresh}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="btn-container">
          <DeleteBtn furnitureId={idFurniture} />
        </div>
        <SimilarProductGrid
          similarProducts={furniture.room}
          updateRefresh={updateRefresh}
        />
      </main>
    </>
  );
};

// Exportiere die 'Detailpage'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default Detailpage;
