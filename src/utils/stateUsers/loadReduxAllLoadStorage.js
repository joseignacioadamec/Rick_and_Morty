export const loadReduxAllLoadStorage = (props) => {
  const setLoadReduxAllUser = () => {
    props.dispatch(props.AllUsersOperators.loadStore());
  };

  const setLoadReduxAliveUser = () => {
    props.dispatch(props.AliveUsersOperators.loadStore());
  };

  const setLoadReduxDeadUser = () => {
    props.dispatch(props.DeadUsersOperators.loadStore());
  };

  const setLoadReduxUnknownUser = () => {
    props.dispatch(props.UnknownUsersOperators.loadStore());
  };

  setLoadReduxAllUser();
  setLoadReduxAliveUser();
  setLoadReduxDeadUser();
  setLoadReduxUnknownUser();
};
