import { useParams } from "react-router-dom";
import UserProfile from "./UserProfile";

const UserProfileContainer = () => {
  const { userId } = useParams();

  return <UserProfile userId={userId} />;
};

export default UserProfileContainer;
