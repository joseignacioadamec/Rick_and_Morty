import { unknownUsersActions } from "./unknownUsersActions";
import { fetchDataUnknownUsers } from "../../helpers/fetchDataUnknownUsers";

export const UnknownUsersOperators = {
  loadStore: () => async (dispatch) => {
    const response = await fetchDataUnknownUsers();
    dispatch(unknownUsersActions.loadStoreUnknownUsers(response.results));
  },

  setItemPerPageUnknownUsers: (state) => (dispatch) => {
    dispatch(unknownUsersActions.setItemPerPageUnknownUsers(state));
  },

  setCountUnknownUsers: (state) => (dispatch) => {
    dispatch(unknownUsersActions.setCountUnknownUsers(state));
  },

  setMoreUnknownUsers: (countUnknownUsers) => async (dispatch) => {
    const response = await fetchDataUnknownUsers(countUnknownUsers);
    dispatch(unknownUsersActions.setMoreUnknownUsers(response.results));
  },
};
