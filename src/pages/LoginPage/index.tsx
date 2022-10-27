import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { CircularProgress } from "@mui/material";
import { UserContext } from "../../contexts/UserContext";
import React, { useContext } from "react";

interface iLogin {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { loading, loginFunction } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("*Email obrigatório"),
    password: yup.string().required("*Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(formSchema),
  });

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
            <Form onSubmit={handleSubmit(loginFunction)}>
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
