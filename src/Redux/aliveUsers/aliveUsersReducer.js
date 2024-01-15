import { AliveUsersTypes } from "./aliveUsersTypes";

const initialStateAliveUsers = {
  aliveUsers: [],
  itemPerPage: 8,
  countAliveUsers: 1,
};

export const aliveUsersReducer = (state = initialStateAliveUsers, action) => {
  switch (action.type) {
    case AliveUsersTypes.SET_LOAD_STORE_ALIVE_USERS:
      return {
        ...state,
        aliveUsers: action.payload.data,
      };
    case AliveUsersTypes.SET_ITEM_PER_PAGE_ALIVE:
      return {
        ...state,
        itemPerPage: action.payload.data.aliveUsersReducer.itemPerPage + 8,
      };
    case AliveUsersTypes.SET_COUNT_ALIVE_USERS:
      return {
        ...state,
        countAliveUsers:
          action.payload.data.aliveUsersReducer.countAliveUsers + 1,
      };
    case AliveUsersTypes.SET_MORE_ALIVE_USERS:
      return {
        ...state,
        aliveUsers: [...state.aliveUsers, ...action.payload.data],
      };
    default:
      return state;
  }
};
