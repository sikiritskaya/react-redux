import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../commonComponents/Preloader";
import ModalNewPost from "./NewPost";
import Posts from "./Posts";
import { addPost } from "../../store/actions/addPostAction";
import { deletePost } from "../../store/actions/deletePostAction";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import styled from "styled-components";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const HeaderPost = styled.div`
  display: flex;
  justify-content: space-between;
`;
const sortTypes= {
  ID: 'title',
  TITLE: 'id',
  DEFAULT: 'default'
}

const {ID, TITLE, DEFAULT} = sortTypes

const PostsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [isModalActive, setIsModalActive] = useState(false);
  const [sortBy, setSortBy] = useState(DEFAULT);

  const sortChanger = (e) => {
    setSortBy(e.target.value);
  };

  const renderPost = (sort) => {
    if (sort === TITLE) {
      posts.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
    }
    if (sort === ID) {
      posts.sort((a, b) => {
        return b.id - a.id;
      });
    }
    if (sort === DEFAULT) {
      posts.sort((a, b) => {
        return a.id - b.id;
      });
    }
  };

  const onSubmit = async (values) => {
    await dispatch(addPost(values));
    await setIsModalActive(false);
  };

  const handleDelete = async (id) => {
    await dispatch(deletePost(id));
  };

  if (!posts) {
    return <Preloader />;
  }

  return (
    <section>
      <HeaderPost>
        <button onClick={() => setIsModalActive(true)}>Create new post</button>
        <FormControl variant="filled">
          <InputLabel shrink>sort by</InputLabel>
          <Select
            value={sortBy}
            onChange={sortChanger}
            render={renderPost(sortBy)}
          >
            <MenuItem value={TITLE}>
              title
              <SortByAlphaIcon />
            </MenuItem>
            <MenuItem value={ID}>
              id
              <ArrowDownwardIcon />
            </MenuItem>
            <MenuItem value={DEFAULT}>default</MenuItem>
          </Select>
        </FormControl>
      </HeaderPost>
      {isModalActive && (
        <ModalNewPost onSubmit={onSubmit} setIsModalActive={setIsModalActive} />
      )}
      <Posts posts={posts} handleDelete={handleDelete} />
    </section>
  );
};

export default PostsContainer;
