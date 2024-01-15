import React, { useState, useEffect } from "react";
import { AllRoutes } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AllUsersOperators } from "./Redux/allUsers/allUsersOperators";
import { AliveUsersOperators } from "./Redux/aliveUsers/aliveUsersOperators";
import { DeadUsersOperators } from "./Redux/deadUsers/deadUsersOperators";
import { UnknownUsersOperators } from "./Redux/unknownUsers/unknownUsersOperators";
import { nextUsers } from "./utils/nextUsers";
import { incrementCountAllUsers } from "./utils/incrementCountAllUsers";
import { moreAllUsers } from "./utils/moreAllUsers";
import { handleChangeStateUsersAll } from "./utils/stateUsers/handleChangeStateUsersAll";
import { handleChangeStateUsersAlive } from "./utils/stateUsers/handleChangeStateUsersAlive";
import { handleChangeStateUsersDead } from "./utils/stateUsers/handleChangeStateUsersDead";
import { handleChangeStateUsersUnknown } from "./utils/stateUsers/handleChangeStateUsersUnknown";
import { changeStateUsersRefresAllPages } from "./utils/stateUsers/changeStateUsersRefresAllPages";
import { loadReduxAllLoadStorage } from "./utils/stateUsers/loadReduxAllLoadStorage";

function App() {
  const dispatch = useDispatch();
  const [oneUser, setOneUser] = useState();
  const state = useSelector((state) => state.loadStore);
  const countAllUsers = state.allUsersReducer.countAllUsers;
  const countAliveUsers = state.aliveUsersReducer.countAliveUsers;
  const countDeadUsers = state.deadUsersReducer.countDeadUsers;
  const countUnknownUsers = state.unknownUsersReducer.countUnknownUsers;
  const stateUsers = state.allUsersReducer.stateUsers;
  const [storedState, setStoredState] = useState(
    sessionStorage.getItem("userState")
  );

  useEffect(() => {
    loadReduxAllLoadStorage({
      storedState,
      dispatch,
      AllUsersOperators,
      AliveUsersOperators,
      DeadUsersOperators,
      UnknownUsersOperators,
    });

    changeStateUsersRefresAllPages({
      storedState,
      dispatch,
      AllUsersOperators,
      handleChangeStateUsersAll,
      handleChangeStateUsersAlive,
      handleChangeStateUsersDead,
      handleChangeStateUsersUnknown,
    });
  }, []);

  const saveUserStateStorage = (data) => {
    sessionStorage.setItem("userState", data);
  };

  useEffect(() => {
    saveUserStateStorage(stateUsers);
    const storedState = sessionStorage.getItem("userState");
    setStoredState(storedState);
  }, [stateUsers]);

  const next = () => {
    nextUsers({
      state: state,
      stateUsers: stateUsers,
      dispatch: dispatch,
      AllUsersOperators: AllUsersOperators,
      AliveUsersOperators: AliveUsersOperators,
      DeadUsersOperators: DeadUsersOperators,
      UnknownUsersOperators: UnknownUsersOperators,
      incrementCount: incrementCount,
      moreUsers: moreUsers,
    });
  };

  const incrementCount = () => {
    incrementCountAllUsers({
      state: state,
      stateUsers: stateUsers,
      dispatch: dispatch,
      AllUsersOperators: AllUsersOperators,
      AliveUsersOperators: AliveUsersOperators,
      DeadUsersOperators: DeadUsersOperators,
      UnknownUsersOperators: UnknownUsersOperators,
    });
  };

  const moreUsers = () => {
    moreAllUsers({
      state: state,
      stateUsers: stateUsers,
      countAllUsers: countAllUsers,
      countAliveUsers: countAliveUsers,
      countDeadUsers: countDeadUsers,
      countUnknownUsers: countUnknownUsers,
      dispatch: dispatch,
      AllUsersOperators: AllUsersOperators,
      AliveUsersOperators: AliveUsersOperators,
      DeadUsersOperators: DeadUsersOperators,
      UnknownUsersOperators: UnknownUsersOperators,
    });
  };

  return (
    <BrowserRouter>
      <AllRoutes
        oneUser={oneUser}
        setOneUser={setOneUser}
        state={state}
        stateUsers={stateUsers}
        handleChangeStateUsersAll={() =>
          handleChangeStateUsersAll(dispatch, AllUsersOperators)
        }
        handleChangeStateUsersAlive={() =>
          handleChangeStateUsersAlive(dispatch, AllUsersOperators)
        }
        handleChangeStateUsersDead={() =>
          handleChangeStateUsersDead(dispatch, AllUsersOperators)
        }
        handleChangeStateUsersUnknown={() =>
          handleChangeStateUsersUnknown(dispatch, AllUsersOperators)
        }
        next={next}
      />
    </BrowserRouter>
  );
}

export default App;
