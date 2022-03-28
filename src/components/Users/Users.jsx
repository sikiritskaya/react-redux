import User from "./User/User";

const Users = (props) => {
  const { users } = props;

  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          company={user.company.name}
          id={user.id}
        />
      ))}
    </div>
  );
};

export default Users;
