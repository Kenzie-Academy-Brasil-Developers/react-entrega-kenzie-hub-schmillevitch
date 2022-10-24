import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Form,
  Input,
  Label,
  ModalHeader,
  Select,
  Button,
  Span,
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

interface iDataTech {
  id: string;
  title: string;
  status: string;
}

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
  } = useForm<iDataTech>({
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
          <>
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
            <Span>{errors.status?.message}</Span>
            <Button type="submit">Cadastrar tecnologia</Button>
          </>
        </Form>
      </Box>
    </div>
  );
};

export default AddModal;
