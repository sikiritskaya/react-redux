const getPostsApi = () => {
  return fetch(process.env.REACT_APP_API_URL)
    .then((res) => res.json())
};

export default getPostsApi;
