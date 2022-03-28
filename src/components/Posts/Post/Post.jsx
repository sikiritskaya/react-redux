import avatar from "../../../assets/images/avatar.jpg";
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const Title = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

const Cancel = styled(CloseIcon)`
  font-size: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  object-fit: contain;
  width: 150px;
`;

const StyleAvatar = styled.div`
  grid-row: 1 / span 2;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const WrapperPost = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: 60px 1fr;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 10px;
`;

const Post = (props) => {
  return (
    <WrapperPost>
      <StyleAvatar>
        <Img src={avatar} alt="avatar" />
      </StyleAvatar>
      <Title>
        {props.title}
        <Cancel onClick={()=>props.handleDelete(props.id)}/>
      </Title>
      <div>{props.body}</div>
    </WrapperPost>
  );
};

export default React.memo(Post);
