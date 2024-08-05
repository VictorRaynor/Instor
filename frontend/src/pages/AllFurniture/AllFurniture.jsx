// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../../components/Header/Header";

// Importiere die 'FurnitureList'-Komponente aus dem '../components/FurnitureList'-Modul
import FurnitureList from "../../components/FurnitureList/FurnitureList";
import PageHeader from "../../components/PageHeader/PageHeader";
import SmallStuffImg from "../../assets/smallstuff.avif";

import { useState } from "react";
// Definiere die React-Komponente 'BigStuff'
const AllFurniture = () => {
  const [categoryName, setCategoryName] = useState("mittel");
  const [pageTitle, setPageTitle] = useState("All Furnitures");
  return (
    <>
      <Header />
      <main>
        <PageHeader pageTitle={pageTitle} imgUrl={SmallStuffImg} />
        <FurnitureList furnituresize={""} />
      </main>
    </>
  );
};

// Exportiere die 'BigStuff'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default AllFurniture;
