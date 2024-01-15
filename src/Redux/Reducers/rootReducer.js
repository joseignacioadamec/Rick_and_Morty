import { combineReducers } from "redux";
import { allUsersReducer } from "../allUsers/allUsersReducer";
import { aliveUsersReducer } from "../aliveUsers/aliveUsersReducer";
import { deadUsersReducer } from "../deadUsers/deadUsersReducer";
import { unknownUsersReducer } from "../unknownUsers/unknownUsersReducer";

const rootReducer = combineReducers({
  loadStore: combineReducers({
    allUsersReducer,
    aliveUsersReducer,
    deadUsersReducer,
    unknownUsersReducer,
  }),
});

export default rootReducer;
