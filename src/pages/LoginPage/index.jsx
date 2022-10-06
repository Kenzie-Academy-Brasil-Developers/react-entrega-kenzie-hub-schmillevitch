import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { Header, Container, Form } from "./styles";
import logo from "../../Logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import DashboardPage from "../DashboardPage";

const LoginPage = () => {
  // const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("email obrigatório"),
    password: yup.string().required("senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    api
      .post("/sessions", { ...data })
      .then((response) => {
        console.log(response.data.user);
        // setUser([...response.data.user]);
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", response.data.token);
        window.localStorage.setItem("@USERID", response.data.user.id);
        toast.success("Você está logado!");
        setIsLogged(true);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <>
      {isLogged ? (
        <DashboardPage />
      ) : (
        <>
          <ToastContainer />
          <Header>
            <img src={logo} alt="lodo da Kenzie" />
          </Header>
          <Container>
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
              <h2>Login</h2>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Digite seu email"
                type="email"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>
              <label htmlFor="email">Senha</label>
              <input
                id="password"
                placeholder="Digite sua senha"
                type="password"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
              <button type="submit">Entrar</button>
              <span>Ainda não possui uma conta?</span>
              <Link to={"/register"}>Cadastre-se</Link>
            </Form>
          </Container>
        </>
      )}
    </>
  );
};

export default LoginPage;
