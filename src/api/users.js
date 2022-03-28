const getUsersApi = () => {
  return fetch(process.env.REACT_APP_USERS_URL)
      .then((res) => res.json())
};

export default getUsersApi;
