import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import logo from "../../Logo.svg";
import { Header, Container, Form, Button } from "./styles";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();

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
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    api
      .post("/users", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Conta criada com sucesso!", { theme: "colored" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <>
      <Header>
        <img src={logo} alt="logo da Kenzie" />
        <Link to={"/"}>Voltar</Link>
      </Header>
      <Container>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Crie sua conta</h2>
          <span>Rápido e grátis, vamos nessa</span>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              placeholder="Digite aqui seu nome"
              type="text"
              {...register("name")}
            />
            <span>{errors.name?.message}</span>
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
            <label htmlFor="confirm-password">Confirmar senha</label>
            <input
              id="confirm-password"
              placeholder="Digite novamente sua senha"
              type="password"
              {...register("confirmPassword")}
            />
            <span>{errors.confirmPassword?.message}</span>
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              placeholder="Fale sobre você"
              type="text"
              {...register("bio")}
            />
            <span>{errors.bio?.message}</span>
            <label htmlFor="contact">Contato</label>
            <input
              id="contact"
              placeholder="Opção de contato"
              type="text"
              {...register("contact")}
            />
            <span>{errors.contact?.message}</span>
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
            <span>{errors.select?.message}</span>
          </div>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
};

export default RegisterPage;
