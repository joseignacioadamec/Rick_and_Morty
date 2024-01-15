import aliveUsersActions from "./aliveUsersActions";
import { fetchDataAliveUsers } from "../../helpers/fetchDataAliveUsers";

export const AliveUsersOperators = {
  loadStore: () => async (dispatch) => {
    const response = await fetchDataAliveUsers();
    dispatch(aliveUsersActions.loadStoreAliveUsers(response.results));
  },

  setItemPerPageAliveUsers: (state) => (dispatch) => {
    dispatch(aliveUsersActions.setItemPerPageAliveUsers(state));
  },

  setCountAliveUsers: (state) => (dispatch) => {
    dispatch(aliveUsersActions.setCountAliveUsers(state));
  },

  setMoreAliveUsers: (countAliveUsers) => async (dispatch) => {
    const response = await fetchDataAliveUsers(countAliveUsers);
    dispatch(aliveUsersActions.setMoreAliveUsers(response.results));
  },
};
