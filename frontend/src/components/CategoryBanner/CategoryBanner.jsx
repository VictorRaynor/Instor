import { NavLink } from "react-router-dom";
// Importiere die Bilddateien für die Kategorien 'bigStuff', 'middleStuff' und 'smallStuff'
import bigStuff from "../../assets/bigstuff.avif";
import middleStuff from "../../assets/middlestuff.avif";
import smallStuff from "../../assets/smallstuff.avif";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";

import "./CategoryBanner.css";

const CategoryBanner = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      {!isLoggedIn && (
        <section className="category-banner-container">
          <h2>Categories</h2>
          <div className="category-banner">
            <NavLink className="home-link" to="/login">
              <article className="home-stuff">
                <img src={bigStuff} alt="big-stuff" />
                <h3>Big Stuff</h3>
              </article>
            </NavLink>
            <NavLink className="home-link" to="/login">
              <article className="home-stuff">
                <img src={middleStuff} alt="middle-stuff" />
                <h3>Middle Stuff</h3>
              </article>
            </NavLink>
            <NavLink className="home-link" to="/login">
              <article className="home-stuff">
                <img src={smallStuff} alt="small-stuff"></img>
                <h3>Small Stuff</h3>
              </article>
            </NavLink>
          </div>
        </section>
      )}
      {isLoggedIn && (
        <section className="category-banner-container">
          <h2>Categories</h2>
          <div className="category-banner">
            <NavLink className="home-link" to="/big-stuff">
              <article className="home-stuff">
                <img src={bigStuff} alt="big-stuff" />
                <h3>Big Stuff</h3>
              </article>
            </NavLink>
            <NavLink className="home-link" to="/middle-stuff">
              <article className="home-stuff">
                <img src={middleStuff} alt="middle-stuff" />
                <h3>Middle Stuff</h3>
              </article>
            </NavLink>
            <NavLink className="home-link" to="/small-stuff">
              <article className="home-stuff">
                <img src={smallStuff} alt="small-stuff"></img>
                <h3>Small Stuff</h3>
              </article>
            </NavLink>
          </div>
        </section>
      )}
    </>
  );
};

export default CategoryBanner;
