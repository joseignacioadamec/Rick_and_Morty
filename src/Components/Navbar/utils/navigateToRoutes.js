export const navigateToRoutes = (option, navigate, props) => {
  if (option === "all") {
    navigate("/allUsers");
    props.handleChangeStateUsersAll();
  }

  if (option === "alive") {
    navigate("/usersAlive");
    props.handleChangeStateUsersAlive();
  }

  if (option === "dead") {
    navigate("/usersDead");
    props.handleChangeStateUsersDead();
  }

  if (option === "unknown") {
    navigate("/usersUnknown");
    props.handleChangeStateUsersUnknown();
  }
};
