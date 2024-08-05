// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import CreateUserForm from "../../components/CreateUserForm/CreateUserForm";
import Header from "../../components/Header/Header";
import "./Register.css";
// Definiere die React-Komponente 'MiddleStuff'
const Register = () => {
  return (
    <>
      <Header />
      <main className="register-main-section">
        <CreateUserForm />
      </main>
    </>
  );
};

export default Register;
