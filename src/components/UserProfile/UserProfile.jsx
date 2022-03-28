import { useSelector } from "react-redux";
import styled from "styled-components";

const Title = styled.div`
  font-weight: bold;
  div {
    font-weight: normal;
  }
`;

const Wrapper = styled.div`
  border: solid 1px rgb(128, 128, 128);
  border-radius: 5px;
  padding: 20px;
`;

const UserProfile = (props) => {
  const { users, posts } = useSelector((state) => state);
  const { userId } = props;

  return (
    <Wrapper>
      {users
        .filter((user) => user.id === parseInt(userId))
        .map((user) => (
          <Title key={user.id}>
            <p>Name</p>
            <div>{user.name}</div>
            <p>E-mail</p>
            <div>{user.email}</div>
            <p>Company</p>
            <div>{user.company.name}</div>
            <p>Location</p>
            <div>{user.address.city}</div>
          </Title>
        ))}
      <div>
        {posts
          .filter((post) => post.userId === parseInt(userId))
          .map((post, index) => (
            <div key={post.id}>
              <p>
                {index + 1}. <strong>{post.title}</strong>
              </p>
              <div>{post.body}</div>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default UserProfile;
