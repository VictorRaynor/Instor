import { NavLink } from "react-router-dom";
import "./Banner.css";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const Banner = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      <section className="furniture-home">
        <h2>Unsere Möbel</h2>
        {!isLoggedIn && <NavLink to="/login">Hier einloggen</NavLink>}
        {isLoggedIn && <NavLink to="/allfurnitures">Mehr entdecken</NavLink>}
      </section>
    </>
  );
};

export default Banner;
