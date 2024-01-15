export const incrementCountAllUsers = (props) => {
  if (
    props.stateUsers === "all" &&
    props.state.allUsersReducer.allUsers.length -
      props.state.allUsersReducer.itemPerPage <
      8
  ) {
    props.dispatch(props.AllUsersOperators.setCountAllUsers(props.state));
  }

  if (
    props.stateUsers === "alive" &&
    props.state.aliveUsersReducer.aliveUsers.length -
      props.state.aliveUsersReducer.itemPerPage <
      8
  ) {
    props.dispatch(props.AliveUsersOperators.setCountAliveUsers(props.state));
  }

  if (
    props.stateUsers === "dead" &&
    props.state.deadUsersReducer.deadUsers.length -
      props.state.deadUsersReducer.itemPerPage <
      8
  ) {
    props.dispatch(props.DeadUsersOperators.setCountDeadUsers(props.state));
  }

  if (
    props.stateUsers === "unknown" &&
    props.state.unknownUsersReducer.unknownUsers.length -
      props.state.unknownUsersReducer.itemPerPage <
      8
  ) {
    props.dispatch(
      props.UnknownUsersOperators.setCountUnknownUsers(props.state)
    );
  }
};
