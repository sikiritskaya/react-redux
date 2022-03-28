import Navbar from "./components/Navbar/Navbar";
import PostsContainer from "./components/Posts/PostsContainer";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";
import styled from "styled-components";
import Context from "./context";
import { useEffect } from "react";
import getUsers from "./api/users";
import getPosts from "./api/posts";
import { setUsers, setPosts } from "./store/redux";
import { useDispatch, useSelector } from "react-redux";

const Header = styled.header`
  grid-column: 1 / span 2;
  background-color: rgb(178, 159, 187);
  display: flex;
  align-items: center;
`;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: 60px 1fr;
  gap: 10px;
  width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers().then((user) => dispatch(setUsers(user)));
    getPosts().then((post) => dispatch(setPosts(post)));
  }, []);

  const value = useSelector((state) => {
    return state;
  });

  return (
    <Context.Provider value={value}>
      <Wrapper>
        <Header>Header</Header>
        <Navbar />
        <Routes>
          <Route path="/posts" element={<PostsContainer />} />
          <Route path="/users/*" element={<UsersContainer />} />
          <Route path="/userProfile" element={<UserProfileContainer />}>
            <Route path=":userId" element={<UserProfileContainer />} />
          </Route>
        </Routes>
      </Wrapper>
    </Context.Provider>
  );
};

export default Layout;
