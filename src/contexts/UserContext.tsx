import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import React from "react";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUser {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  contact: string;
  works: iWorks[];
  course_module: string;
  techs: iTechs[];
}

interface iWorks {}

interface iTechs {
  id: string;
  title: string;
  status: string;
}

interface iData {
  email: string;
  password: string;
}

interface iUserContext {
  user: iUser;
  loading: boolean;
  isLoggedIn: boolean;
  loginFunction: (data: iData) => void;
  registerFunction: (data: iData) => void;
  verifyToken: () => void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser>({} as iUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
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
  // eslint-disable-next-line
  useEffect(() => verifyToken(), []);

  const verifyToken = () => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      navigate("/");
    } else {
      api
        .get(`/profile`, {
          headers: {
            authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
          },
        })
        .then((response) => {
          setUser(response.data);
          setIsLoggedIn(true);
          navigate("dashboard");
        })
        .catch((error) => {
          console.error(error);
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
          setIsLoggedIn(false);
          navigate("/");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const loginFunction = (data: iData): void => {
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
        setIsLoggedIn(true);
        toast.success("Você está logado!");
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
        toast.error("Ops! Algo deu errado");
      });
  };

  const registerFunction = (data: iData): void => {
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
    <UserContext.Provider
      value={{
        user,
        loading,
        loginFunction,
        registerFunction,
        isLoggedIn,
        verifyToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
