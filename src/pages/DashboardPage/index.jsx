import { Link } from "react-router-dom";
import { Navbar, Header } from "./styles";
import logo from "../../Logo.svg";

const DashboardPage = ({ user }) => {
  return (
    <>
      <div>
        <Navbar>
          <img src={logo} alt="lodo da Kenzie" />
          <Link to="/">
            <div>Sair</div>
          </Link>
        </Navbar>
        <Header>
          <div>
            <h4>Olá, NOME AQUI</h4>
            <p>módulo</p>
          </div>
        </Header>
      </div>
    </>
  );
};

export default DashboardPage;
