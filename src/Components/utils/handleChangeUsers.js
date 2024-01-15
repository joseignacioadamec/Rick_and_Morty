export const handleChangeUsers = (state) => {
  if (state.allUsersReducer.stateUsers === "all") {
    return state?.allUsersReducer.allUsers;
  } else if (state.allUsersReducer.stateUsers === "alive") {
    return state.aliveUsersReducer.aliveUsers;
  } else if (state.allUsersReducer.stateUsers === "dead") {
    return state.deadUsersReducer.deadUsers;
  } else if (state.allUsersReducer.stateUsers === "unknown") {
    return state.unknownUsersReducer.unknownUsers;
  }
};
