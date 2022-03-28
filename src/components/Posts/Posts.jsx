import Post from "../Posts/Post/Post";

const Posts = (props) => {
  const { posts } = props;

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;