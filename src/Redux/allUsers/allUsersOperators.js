import allUsersActions from "./allUsersActions";
import { fetchDataAllUsers } from "../../helpers/fetchDataAllUsers";

export const AllUsersOperators = {
  loadStore: () => async (dispatch) => {
    const response = await fetchDataAllUsers(1);
    dispatch(allUsersActions.loadStoreAllUsers(response.results));
  },

  setItemPerPageAllUsers: (state) => (dispatch) => {
    dispatch(allUsersActions.setItemPerPageAllUsers(state));
  },

  setCountAllUsers: (state) => (dispatch) => {
    dispatch(allUsersActions.setCountAllUsers(state));
  },

  setMoreAllUsers: (countAllUsers) => async (dispatch) => {
    const response = await fetchDataAllUsers(countAllUsers);
    dispatch(allUsersActions.setMoreAllUsers(response.results));
  },

  setStateUsers: (data) => async (dispatch) => {
    dispatch(allUsersActions.setStateUsers(data));
  },
};
