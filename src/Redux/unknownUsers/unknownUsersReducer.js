import { UnknownUsersTypes } from "./unknownUserTypes";

const initialStateUnknownUsers = {
  unknownUsers: [],
  itemPerPage: 8,
  countUnknownUsers: 1,
};

export const unknownUsersReducer = (
  state = initialStateUnknownUsers,
  action
) => {
  switch (action.type) {
    case UnknownUsersTypes.SET_LOAD_STORE_UNKNOWN_USERS:
      return {
        ...state,
        unknownUsers: action.payload.data,
      };
    case UnknownUsersTypes.SET_ITEM_PER_PAGE_UNKNOWN:
      return {
        ...state,
        itemPerPage: action.payload.data.unknownUsersReducer.itemPerPage + 8,
      };
    case UnknownUsersTypes.SET_COUNT_UNKNOWN_USERS:
      return {
        ...state,
        countUnknownUsers:
          action.payload.data.unknownUsersReducer.countUnknownUsers + 1,
      };
    case UnknownUsersTypes.SET_MORE_UNKNOWN_USERS:
      return {
        ...state,
        unknownUsers: [...state.unknownUsers, ...action.payload.data],
      };
    default:
      return state;
  }
};
