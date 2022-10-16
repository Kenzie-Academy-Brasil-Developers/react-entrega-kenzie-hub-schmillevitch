import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Form,
  Input,
  Label,
  Span,
  ModalHeader,
  Select,
  Button,
} from "./styles";
import { TechContext } from "../../contexts/TechContext";
import { useContext } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 60,
  bgcolor: "transparent",
};

const AddModal = () => {
  const { handleModalFalse, addTech } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("*Nome obrigatório"),
    status: yup.string().required("*Seleção obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <div>
      <Box sx={style}>
        <ModalHeader>
          <h4>Cadastrar Tecnologia</h4>
          <button onClick={() => handleModalFalse()}>X</button>
        </ModalHeader>

        <Form onSubmit={handleSubmit(addTech)}>
          <div>
            <Label htmlFor="title">Nome</Label>
            <Input
              id="title"
              placeholder="Digite o nome da tecnologia"
              type="text"
              {...register("title")}
            />
            <Span>{errors.title?.message}</Span>

            <Label htmlFor="status">Selecionar status</Label>
            <Select id="status" {...register("status")}>
              <option defaultValue="">Selecione:</option>
              <option defaultValue="Iniciante">Iniciante</option>
              <option defaultValue="Intermediário">Intermediário</option>
              <option defaultValue="Avançado">Avançado</option>
            </Select>
            <span>{errors.status?.message}</span>
            <Button type="submit">Cadastrar tecnologia</Button>
          </div>
        </Form>
      </Box>
    </div>
  );
};

export default AddModal;
