import { Link } from "react-router-dom";
import {
  Navbar,
  Header,
  Container,
  TechList,
  TechItem,
  DivContainer,
} from "./styles";
import logo from "../../Logo.svg";
import add from "../../Add.svg";
import bin from "../../Bin.png";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import AddModal from "../../components/AddModal";

const DashboardPage = () => {
  const { user, verifyToken } = useContext(UserContext);
  const { showModalTechs, handleModalTrue, deleteTech } =
    useContext(TechContext);

  console.log(showModalTechs);

  const logout = () => {
    window.localStorage.clear();
  };

  // eslint-disable-next-line
  useEffect(() => verifyToken(), []);

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

        <main>
          <Container>
            <h4>Tecnologias</h4>
            <button onClick={() => handleModalTrue()}>
              <img src={add} alt="adicionar" />
            </button>
          </Container>

          <TechList>
            {user.techs?.map((tech) => (
              <TechItem key={tech.title}>
                <DivContainer>
                  <p>{tech.title}</p>
                  <div>
                    <span>{tech.status}</span>
                    <button onClick={() => deleteTech(tech.id)}>
                      <img src={bin} alt="excluir tecnologia" />
                    </button>
                  </div>
                </DivContainer>
              </TechItem>
            ))}
          </TechList>

          {showModalTechs && <AddModal />}
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
