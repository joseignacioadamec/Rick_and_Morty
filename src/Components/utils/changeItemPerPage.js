export const changeItemPerPage = (state) => {
  if (state.allUsersReducer.stateUsers === "all") {
    return state.allUsersReducer.itemPerPage;
  } else if (state.allUsersReducer.stateUsers === "alive") {
    return state.aliveUsersReducer.itemPerPage;
  } else if (state.allUsersReducer.stateUsers === "dead") {
    return state.deadUsersReducer.itemPerPage;
  } else if (state.allUsersReducer.stateUsers === "unknown") {
    return state.unknownUsersReducer.itemPerPage;
  }
};
