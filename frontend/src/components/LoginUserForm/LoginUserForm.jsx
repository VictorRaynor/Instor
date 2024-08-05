import axios from "axios";
import "./LoginUserForm.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import BackButtonGrey from "../BackButtonGrey/BackButtonGrey";

export default function Login() {
  const { refetch, isLoggedIn, user, setUser } = useContext(UserContext);
  const nav = useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      let formData;
      if (e.target.value === "testlogin") {
        formData = {
          email: "test@test.de",
          password: "test",
        };
      } else {
        formData = new FormData(e.currentTarget);
      }

      const resp = await axios.post("/api/login", formData);
      refetch();

      setTimeout(() => {
        nav(`/user/${resp.data.data.userhandle}`);
      }, 2000);

      e.target.reset();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(
          "Ungültige Anmeldeinformationen. Bitte überprüfe deine E-Mail und dein Passwort."
        );
      } else {
        setError(
          "Ein Fehler ist aufgetreten. Bitte versuche es später erneut."
        );
      }
      e.target.reset();
    }
  };
  return (
    <>
      {!isLoggedIn && (
        <div className="login-user-form-container">
          <div className="login-title-container">
            <BackButtonGrey />
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-fields-container">
              <input
                type="email"
                placeholder="Deine Emailadresse"
                name="email"
                required
              />
              <input
                type="password"
                placeholder="Dein Passwort"
                name="password"
                required
              />
              {error && <small>{error}</small>}
              <button className="submit-btn" type="submit">
                Login
              </button>
              <Link to="/register">
                <button className="to-register-btn">
                  Noch kein Konto? Konto anlegen
                </button>
              </Link>
              <button
                className="submit-btn"
                onClick={handleSubmit}
                value={"testlogin"}
              >
                Login als Testuser
              </button>
            </div>
          </form>
          <Link to="/forgotpassword">Du hast dein Passwort vergessen?</Link>
        </div>
      )}
      {isLoggedIn && (
        <section className="login-animation">
          <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1>Loading...</h1>
        </section>
      )}
    </>
  );
}
