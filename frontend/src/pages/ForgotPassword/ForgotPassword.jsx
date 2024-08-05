import Header from "../../components/Header/Header";
import "./ForgotPassword.css";
import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <>
      <Header />
      <main className="login-main-section">
        <ForgotPasswordForm />
      </main>
    </>
  );
};

export default ForgotPassword;
