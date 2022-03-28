import { useContext } from "react";
import Context from "../../context";
import Preloader from "../commonComponents/Preloader";
import Users from "./Users";

const UsersContainer = () => {
  const value = useContext(Context);

  if (!value.users) {
    return <Preloader />;
  }

  return <Users users={value.users} />;
};

export default UsersContainer;