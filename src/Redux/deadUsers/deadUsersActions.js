import { DeadUsersTypes } from "./deadUsersTypes";

const deadUsersActions = {
  loadStoreDeadUsers: (data) => ({
    type: DeadUsersTypes.SET_LOAD_STORE_DEAD_USERS,
    payload: { data },
  }),

  setItemPerPageDeadUsers: (data) => ({
    type: DeadUsersTypes.SET_ITEM_PER_PAGE_DEAD,
    payload: { data },
  }),

  setCountDeadUsers: (data) => ({
    type: DeadUsersTypes.SET_COUNT_DEAD_USERS,
    payload: { data },
  }),

  setMoreDeadUsers: (data) => ({
    type: DeadUsersTypes.SET_MORE_DEAD_USERS,
    payload: { data },
  }),
};

export default deadUsersActions;
