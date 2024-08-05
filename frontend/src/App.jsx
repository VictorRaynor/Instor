// Importiere die CSS-Datei für das Styling der App
import "./App.css";

// Importiere die notwendigen Komponenten und Funktionen aus dem 'react-router-dom'-Modul
import { Routes, Route } from "react-router-dom";

// Importiere die verschiedenen Seiten-Komponenten aus ihren jeweiligen Dateien
import Home from "./pages/Home/Home";
import Bigstuff from "./pages/BigStuff/BigStuff";
import Middlestuff from "./pages/MiddleStuff/MiddleStuff";
import Smallstuff from "./pages/SmallStuff/SmallStuff";
import Detailpage from "./pages/DetailPage/Detailpage";
import AllFurniture from "./pages/AllFurniture/AllFurniture";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/UserProfile/UserProfile";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

// Definiere die App-Komponente
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/big-stuff" element={<Bigstuff />} />
        <Route path="/allfurnitures" element={<AllFurniture />} />
        <Route path="/middle-stuff" element={<Middlestuff />} />
        <Route path="/small-stuff" element={<Smallstuff />} />
        <Route path="/furniture/:id" element={<Detailpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:userHandle" element={<UserProfile />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

// Exportiere die 'App'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default App;
