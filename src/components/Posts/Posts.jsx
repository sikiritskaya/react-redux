import Post from "../Posts/Post/Post";

const Posts = (props) => {
  const { posts, handleDelete } = props;

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Posts;
