export const changeStateUsersAndNavigateRoute = (option, navigate, props) => {
  if (option === "/allUsers") {
    navigate("/allUsers");
    props.handleChangeStateUsersAll();
  }

  if (option === "/usersAlive") {
    navigate("/usersAlive");
    props.handleChangeStateUsersAlive();
  }

  if (option === "/usersDead") {
    navigate("/usersDead");
    props.handleChangeStateUsersDead();
  }

  if (option === "/usersUnknown") {
    navigate("/usersUnknown");
    props.handleChangeStateUsersUnknown();
  }
};
