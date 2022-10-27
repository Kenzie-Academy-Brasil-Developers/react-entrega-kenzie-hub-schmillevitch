import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../Logo.svg";
import { Header, Container, Form, Button } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import React from "react";

interface iRegister {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
  select: string;
}

const RegisterPage = () => {
  const { registerFunction } = useContext(UserContext);
  const formSchema = yup.object().shape({
    name: yup.string().required("*Nome obrigatório"),
    email: yup.string().required("*Email obrigatório"),
    password: yup
      .string()
      .min(8, "*Precisa conter pelo menos 8 caracteres")
      .matches(/(\d)/, "*Precisa conter pelo menos um número")
      .matches(/[a-zA-Z]/, "*Precisa conter pelo menos uma letra")
      .matches(/(\W)/, "*Precisa conter pelo menos um símbolo")
      .required("*Senha obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Deve ser igual a anterior")
      .required("*Senha obrigatória"),
    bio: yup.string().required("*Bio obrigatória"),
    contact: yup.string().required("*Contato obrigatório"),
    course_module: yup.string().required("*Seleção obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Header>
        <img src={logo} alt="logo da Kenzie" />
        <Link to={"/"}>Voltar</Link>
      </Header>
      <Container>
        <Form onSubmit={handleSubmit(registerFunction)}>
          <>
            <h2>Crie sua conta</h2>
            <span>Rápido e grátis, vamos nessa</span>

            <label htmlFor="name">Nome</label>
            <input
              id="name"
              placeholder="Digite aqui seu nome"
              type="text"
              {...register("name")}
            />
            {errors.name?.message}
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Digite seu email"
              type="email"
              {...register("email")}
            />
            {errors.email?.message}
            <label htmlFor="email">Senha</label>
            <input
              id="password"
              placeholder="Digite sua senha"
              type="password"
              {...register("password")}
            />
            {errors.password?.message}
            <label htmlFor="confirm-password">Confirmar senha</label>
            <input
              id="confirm-password"
              placeholder="Digite novamente sua senha"
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message}
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              placeholder="Fale sobre você"
              type="text"
              {...register("bio")}
            />
            {errors.bio?.message}
            <label htmlFor="contact">Contato</label>
            <input
              id="contact"
              placeholder="Opção de contato"
              type="text"
              {...register("contact")}
            />
            {errors.contact?.message}
            <label htmlFor="select">Selecionar módulo</label>
            <select id="course_module" {...register("course_module")}>
              <option defaultValue="">Selecione:</option>
              <option defaultValue="primeiro-modulo">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option defaultValue="segundo-modulo">
                Segundo módulo (Frontend Avançado)
              </option>
              <option defaultValue="terceiro-modulo">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option defaultValue="quarto-modulo">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
            {errors.select?.message}

            <Button type="submit">Cadastrar</Button>
          </>
        </Form>
      </Container>
    </>
  );
};

export default RegisterPage;
