export const nextUsers = (props) => {
  if (props.stateUsers === "all") {
    props.dispatch(props.AllUsersOperators.setItemPerPageAllUsers(props.state));
    props.incrementCount();
    props.moreUsers();
  }

  if (props.stateUsers === "alive") {
    props.dispatch(
      props.AliveUsersOperators.setItemPerPageAliveUsers(props.state)
    );
    props.incrementCount();
    props.moreUsers();
  }

  if (props.stateUsers === "dead") {
    props.dispatch(
      props.DeadUsersOperators.setItemPerPageDeadUsers(props.state)
    );
    props.incrementCount();
    props.moreUsers();
  }

  if (props.stateUsers === "unknown") {
    props.dispatch(
      props.UnknownUsersOperators.setItemPerPageUnknownUsers(props.state)
    );
    props.incrementCount();
    props.moreUsers();
  }
};
