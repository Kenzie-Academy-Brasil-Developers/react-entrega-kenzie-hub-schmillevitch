import UserProvider from "./UserContext";
import { TechProvider } from "./TechContext";

const Provider = ({ children }) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Provider;
