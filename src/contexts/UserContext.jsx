import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
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

  const loginFunction = (data) => {
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

  const registerFunction = (data) => {
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
        setUser,
        loading,
        setLoading,
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
