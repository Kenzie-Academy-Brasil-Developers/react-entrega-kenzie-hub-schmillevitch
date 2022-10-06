import { Link } from "react-router-dom";
import { Navbar, Header } from "./styles";
import logo from "../../Logo.svg";

const DashboardPage = ({ user }) => {
  const logout = () => {
    window.localStorage.clear();
  };

  return (
    <>
      <div>
        <Navbar>
          <img src={logo} alt="lodo da Kenzie" />
          <Link to="/" onClick={logout}>
            Sair
          </Link>
        </Navbar>
        <Header>
          <div>
            <h4>Olá, {user?.name}</h4>
            <p>{user?.course_module}</p>
          </div>
        </Header>
      </div>
    </>
  );
};

export default DashboardPage;
