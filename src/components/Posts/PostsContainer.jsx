import { useContext, useState } from "react";
import postData from "../../api/postData";
import Context from "../../context";
import Preloader from "../commonComponents/Preloader";
import ModalNewPost from "./NewPost";
import Posts from "./Posts";

const PostsContainer = () => {
  const value = useContext(Context);

  const [isModalActive, setIsModalActive] = useState(false);

  const onSubmit = (values) => {
    postData(values).then(()=>setIsModalActive(false))
  }

  if (!value.posts) {
    return <Preloader />;
  }

  return (
    <section>
      <button onClick={() => setIsModalActive(true)}>Create new post</button>
      {isModalActive && <ModalNewPost onSubmit={onSubmit} setIsModalActive={setIsModalActive} />}
      <Posts posts={value.posts} />;
    </section>
  );
};

export default PostsContainer;