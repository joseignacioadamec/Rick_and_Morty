import { AllUsersTypes } from "./allUsersTypes";

const allUsersActions = {
  loadStoreAllUsers: (data) => ({
    type: AllUsersTypes.SET_LOAD_STORE_ALL_USERS,
    payload: { data },
  }),

  setItemPerPageAllUsers: (data) => ({
    type: AllUsersTypes.SET_ITEM_PER_PAGE,
    payload: { data },
  }),

  setCountAllUsers: (data) => ({
    type: AllUsersTypes.SET_COUNT_ALL_USERS,
    payload: { data },
  }),

  setMoreAllUsers: (data) => ({
    type: AllUsersTypes.SET_MORE_ALL_USERS,
    payload: { data },
  }),

  setStateUsers: (data) => {
    return {
      type: AllUsersTypes.SET_STATE_USERS,
      payload: { data },
    };
  },
};
export default allUsersActions;
