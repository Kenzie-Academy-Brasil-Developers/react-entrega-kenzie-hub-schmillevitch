import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import {
  Header,
  Container,
  Form,
  Input,
  Label,
  Span,
  Button,
  Loading,
} from "./styles";
import logo from "../../Logo.svg";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const LoginPage = ({ setUser }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("*Email obrigatório"),
    password: yup.string().required("*Senha obrigatória"),
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
      .post("/sessions", data)
      .then((response) => {
        console.log(response.data.user);
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", response.data.token);
        window.localStorage.setItem("@USERID", response.data.user.id);
        setUser(response.data.user);
        setLoading(true);
        toast.success("Você está logado!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        navigate("/dashboard");
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loading>
          <CircularProgress />
          <p>Carregando</p>
        </Loading>
      ) : (
        <>
          <Header>
            <img src={logo} alt="lodo da Kenzie" />
          </Header>
          <Container>
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
              <h2>Login</h2>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Digite seu email"
                  type="email"
                  {...register("email")}
                />
                <Span>{errors.email?.message}</Span>

                <Label htmlFor="email">Senha</Label>
                <Input
                  id="password"
                  placeholder="Digite sua senha"
                  type="password"
                  {...register("password")}
                />
                <Span>{errors.password?.message}</Span>
              </div>
              <Button type="submit">Entrar</Button>
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
