export const changeStateUsersRefresAllPages = (props) => {
  if (props.storedState === "all") {
    props.handleChangeStateUsersAll(props.dispatch, props.AllUsersOperators);
  }
  if (props.storedState === "alive") {
    props.handleChangeStateUsersAlive(props.dispatch, props.AllUsersOperators);
  }

  if (props.storedState === "dead") {
    props.handleChangeStateUsersDead(props.dispatch, props.AllUsersOperators);
  }
  if (props.storedState === "unknown") {
    props.handleChangeStateUsersUnknown(
      props.dispatch,
      props.AllUsersOperators
    );
  }
};
