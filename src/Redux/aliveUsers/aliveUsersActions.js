import { AliveUsersTypes } from "./aliveUsersTypes";

const aliveUsersActions = {
  loadStoreAliveUsers: (data) => ({
    type: AliveUsersTypes.SET_LOAD_STORE_ALIVE_USERS,
    payload: { data },
  }),

  setItemPerPageAliveUsers: (data) => ({
    type: AliveUsersTypes.SET_ITEM_PER_PAGE_ALIVE,
    payload: { data },
  }),

  setCountAliveUsers: (data) => ({
    type: AliveUsersTypes.SET_COUNT_ALIVE_USERS,
    payload: { data },
  }),

  setMoreAliveUsers: (data) => ({
    type: AliveUsersTypes.SET_MORE_ALIVE_USERS,
    payload: { data },
  }),
};

export default aliveUsersActions;
