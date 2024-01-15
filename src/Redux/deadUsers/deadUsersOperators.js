import deadUsersActions from "./deadUsersActions";
import { fetchDataDeadUsers } from "../../helpers/fetchDataDeadUsers";

export const DeadUsersOperators = {
  loadStore: () => async (dispatch) => {
    const response = await fetchDataDeadUsers();
    dispatch(deadUsersActions.loadStoreDeadUsers(response.results));
  },

  setItemPerPageDeadUsers: (state) => (dispatch) => {
    dispatch(deadUsersActions.setItemPerPageDeadUsers(state));
  },

  setCountDeadUsers: (state) => (dispatch) => {
    dispatch(deadUsersActions.setCountDeadUsers(state));
  },

  setMoreDeadUsers: (countDeadUsers) => async (dispatch) => {
    const response = await fetchDataDeadUsers(countDeadUsers);
    dispatch(deadUsersActions.setMoreDeadUsers(response.results));
  },
};
