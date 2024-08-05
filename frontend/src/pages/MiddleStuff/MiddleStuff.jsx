// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../../components/Header/Header";

// Importiere die 'FurnitureList'-Komponente aus dem '../components/FurnitureList'-Modul
import FurnitureList from "../../components/FurnitureList/FurnitureList";
import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import MiddleStuffImg from "../../assets/middlestuff.avif";

// Definiere die React-Komponente 'MiddleStuff'
const MiddleStuff = () => {
  const [categoryName, setCategoryName] = useState("mittel");
  const [pageTitle, setPageTitle] = useState("Middle Stuff");

  return (
    <>
      <Header />
      <main>
        <PageHeader pageTitle={pageTitle} imgUrl={MiddleStuffImg} />
        <FurnitureList furnituresize={categoryName} />
      </main>
    </>
  );
};

export default MiddleStuff;
