import { DeadUsersTypes } from "./deadUsersTypes";

const initialStateDeadUsers = {
  deadUsers: [],
  itemPerPage: 8,
  countDeadUsers: 1,
};

export const deadUsersReducer = (state = initialStateDeadUsers, action) => {
  switch (action.type) {
    case DeadUsersTypes.SET_LOAD_STORE_DEAD_USERS:
      return {
        ...state,
        deadUsers: action.payload.data,
      };
    case DeadUsersTypes.SET_ITEM_PER_PAGE_DEAD:
      return {
        ...state,
        itemPerPage: action.payload.data.deadUsersReducer.itemPerPage + 8,
      };
    case DeadUsersTypes.SET_COUNT_DEAD_USERS:
      return {
        ...state,
        countDeadUsers: action.payload.data.deadUsersReducer.countDeadUsers + 1,
      };
    case DeadUsersTypes.SET_MORE_DEAD_USERS:
      return {
        ...state,
        deadUsers: [...state.deadUsers, ...action.payload.data],
      };
    default:
      return state;
  }
};
