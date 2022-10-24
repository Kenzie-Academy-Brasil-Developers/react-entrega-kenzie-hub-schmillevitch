import UserProvider from "./UserContext";
import { TechProvider } from "./TechContext";
import React from "react";

interface iProvider {
  children: React.ReactNode;
}

const Provider = ({ children }: iProvider) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Provider;
