export const moreAllUsers = (props) => {
  if (
    props.stateUsers === "all" &&
    props.state.allUsersReducer.allUsers.length -
      props.state.allUsersReducer.itemPerPage <
      8
  ) {
    props.dispatch(
      props.AllUsersOperators.setMoreAllUsers(props.countAllUsers + 1)
    );
  }

  if (
    props.stateUsers === "alive" &&
    props.state.aliveUsersReducer.aliveUsers.length -
      props.state.aliveUsersReducer.itemPerPage <
      8
  ) {
    props.dispatch(
      props.AliveUsersOperators.setMoreAliveUsers(props.countAliveUsers + 1)
    );
  }

  if (
    props.stateUsers === "dead" &&
    props.state.deadUsersReducer.deadUsers.length -
      props.state.deadUsersReducer.itemPerPage <
      8
  ) {
    props.dispatch(
      props.DeadUsersOperators.setMoreDeadUsers(props.countDeadUsers + 1)
    );
  }

  if (
    props.stateUsers === "unknown" &&
    props.state.unknownUsersReducer.unknownUsers.length -
      props.state.unknownUsersReducer.itemPerPage <
      8
  ) {
    props.dispatch(
      props.UnknownUsersOperators.setMoreUnknownUsers(
        props.countUnknownUsers + 1
      )
    );
  }
};
