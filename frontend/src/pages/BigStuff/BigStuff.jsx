// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../../components/Header/Header";

// Importiere die 'FurnitureList'-Komponente aus dem '../components/FurnitureList'-Modul
import FurnitureList from "../../components/FurnitureList/FurnitureList";
import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

import BigStuffImg from "../../assets/bigstuff.avif";

// Definiere die React-Komponente 'BigStuff'
const BigStuff = () => {
  const [categoryName, setCategoryName] = useState("gross");
  const [pageTitle, setPageTitle] = useState("Big Stuff");
  return (
    <>
      <Header />
      <main>
        <PageHeader pageTitle={pageTitle} imgUrl={BigStuffImg} />
        <FurnitureList furnituresize={categoryName} />
      </main>
    </>
  );
};

export default BigStuff;
