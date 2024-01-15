export const changePath = (stateUsers, navigate) => {
  if (stateUsers === "all") {
    setTimeout(() => {
      navigate("/allUsers");
    }, 0);
  }

  if (stateUsers === "alive") {
    setTimeout(() => {
      navigate("/usersAlive");
    }, 0);
  }

  if (stateUsers === "dead") {
    setTimeout(() => {
      navigate("/usersDead");
    }, 0);
  }

  if (stateUsers === "unknown") {
    setTimeout(() => {
      navigate("/usersUnknown");
    }, 0);
  }
};
