import "./ForgotPasswordForm";
import BackButtonGrey from "../BackButtonGrey/BackButtonGrey";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ForgotPasswordForm() {
  const [query] = useSearchParams();

  const id = query.get("id");
  const token = query.get("token");

  const isRequestStep = !token && !id;

  return isRequestStep ? (
    <RequestReset />
  ) : (
    <ConfirmReset id={id} token={token} />
  );
}
function RequestReset() {
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(null);
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await axios.post("/api/resetPassword", {
        email: e.currentTarget.elements.email.value,
      });
      setConfirmed(true);
    } catch (e) {
      console.log("/resetPassword failed", e);
      // setError("Something went wrong!");
    }
  };

  return confirmed ? (
    <>
      <p>An Email with a Password reset link has been send.Check your inbox.</p>
      <div className="sec-txt-box">
        {setTimeout(() => {
          nav(`/`);
        }, 2000)}
      </div>
    </>
  ) : (
    <>
      <div className="login-user-form-container">
        <div className="login-title-container">
          <BackButtonGrey />
          <h1>Passwort zurücksetzen</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-fields-container">
            <input
              type="email"
              placeholder="Deine Emailadresse"
              name="email"
              required
            />

            {error && <small>{error}</small>}
            <button className="submit-btn" type="submit">
              Abschicken
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function ConfirmReset({ id, token }) {
  const nav = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await axios.post("/api/resetPasswordConfirm", {
        password: e.currentTarget.elements.password.value,
        id,
        token,
      });
      nav("/login");
    } catch (e) {
      console.log("/resetPassword failed", e);
      setError("Something went wrong!");
    }
  };

  return (
    <>
      <div className="login-user-form-container">
        <div className="login-title-container">
          <BackButtonGrey />
          <h1>Neues Passwort</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-fields-container">
            <input
              name="password"
              type="password"
              placeholder="Neues Passwort"
            />
            <input
              name="password-confirm"
              type="password"
              placeholder="Neues Passwort wiederholen"
            />

            {error && <small>{error}</small>}
            <button className="submit-btn" type="submit">
              Abschicken
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
