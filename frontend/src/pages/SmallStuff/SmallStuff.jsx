// Importiere die 'FurnitureList'-Komponente aus dem '../components/FurnitureList'-Modul
import FurnitureList from "../../components/FurnitureList/FurnitureList";

// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../../components/Header/Header";
import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SmallStuffImg from "../../assets/smallstuff.avif";

// Definiere die React-Komponente 'SmallStuff'
const SmallStuff = () => {
  const [categoryName, setCategoryName] = useState("klein");
  const [pageTitle, setPageTitle] = useState("Small Stuff");

  return (
    <>
      <Header />
      <main>
        <PageHeader pageTitle={pageTitle} imgUrl={SmallStuffImg} />
        <FurnitureList furnituresize={categoryName} />
      </main>
    </>
  );
};

export default SmallStuff;
