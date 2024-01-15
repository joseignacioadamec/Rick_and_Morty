import { UnknownUsersTypes } from "./unknownUserTypes";

export const unknownUsersActions = {
  loadStoreUnknownUsers: (data) => ({
    type: UnknownUsersTypes.SET_LOAD_STORE_UNKNOWN_USERS,
    payload: { data },
  }),

  setItemPerPageUnknownUsers: (data) => ({
    type: UnknownUsersTypes.SET_ITEM_PER_PAGE_UNKNOWN,
    payload: { data },
  }),

  setCountUnknownUsers: (data) => ({
    type: UnknownUsersTypes.SET_COUNT_UNKNOWN_USERS,
    payload: { data },
  }),

  setMoreUnknownUsers: (data) => ({
    type: UnknownUsersTypes.SET_MORE_UNKNOWN_USERS,
    payload: { data },
  }),
};

export default unknownUsersActions;
