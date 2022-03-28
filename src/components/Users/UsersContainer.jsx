import { useSelector } from "react-redux";
import Preloader from "../commonComponents/Preloader";
import Users from "./Users";

const UsersContainer = () => { 
  const users = useSelector((state)=> state.users)

  if (!users) {
    return <Preloader />;
  }

  return <Users users={users} />;
};

export default UsersContainer;
