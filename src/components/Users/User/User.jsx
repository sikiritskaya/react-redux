import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleUser = styled.div`
  border: solid 1px rgb(128, 128, 128);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  color: rgb(0, 0, 0);
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`;

const User = (props) => {
  return (
    <StyleUser>
      <StyledLink to={`/userProfile/${props.id}`}>
        <p>{props.name}</p>
      </StyledLink>
      <p>{props.company}</p>
    </StyleUser>
  );
};

export default User;
