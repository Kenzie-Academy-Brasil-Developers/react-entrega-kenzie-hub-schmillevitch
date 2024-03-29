import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import React from "react";

interface iTechProviderProps {
  children: React.ReactNode;
}

interface iDataTech {
  id: string;
  title: string;
  status: string;
}

interface iTechContext {
  addTech: (data: iDataTech) => void;
  showModalTechs: boolean;
  loading: boolean;
  handleModalTrue: () => void;
  handleModalFalse: () => void;
  deleteTech: (tech_id: string) => void;
}

export const TechContext = createContext<iTechContext>({} as iTechContext);

export const TechProvider = ({ children }: iTechProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [showModalTechs, setShowModalTechs] = useState(false);
  const { verifyToken } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        navigate("/dashboard");
        setLoading(false);
      }, 2000);
    }
    // eslint-disable-next-line
  }, [loading]);

  const addTech = (data: iDataTech) => {
    console.log(data);
    api
      .post(
        "/users/techs",
        { ...data },
        {
          headers: {
            authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
          },
        }
      )
      .then((response) => {
        toast.success("Tecnologia cadastrada com sucesso!");
        verifyToken();
        setShowModalTechs(false);
        setLoading(true);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Tecnologia já está cadastrada!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function handleModalTrue() {
    setShowModalTechs(true);
  }

  function handleModalFalse() {
    setShowModalTechs(false);
  }

  const deleteTech = (tech_id: string) => {
    console.log(tech_id);
    api
      .delete(`/users/techs/${tech_id}`, {
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia deletada com sucesso!");
        verifyToken();
        setShowModalTechs(false);
        setLoading(true);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Não foi possível deletar a tecnologia!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <TechContext.Provider
      value={{
        showModalTechs,
        addTech,
        loading,
        handleModalTrue,
        handleModalFalse,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
