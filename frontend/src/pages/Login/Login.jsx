import Header from "../../components/Header/Header";
import LoginUserForm from "../../components/LoginUserForm/LoginUserForm";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Header />
      <main className="login-main-section">
        <LoginUserForm />
      </main>
    </>
  );
};

export default Login;
