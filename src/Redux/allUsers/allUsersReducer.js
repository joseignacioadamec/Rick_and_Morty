import { AllUsersTypes } from "./allUsersTypes";

const initialStateAllUsers = {
  allUsers: [],
  itemPerPage: 8,
  countAllUsers: 1,
  stateUsers: "all",
};

export const allUsersReducer = (state = initialStateAllUsers, action) => {
  switch (action.type) {
    case AllUsersTypes.SET_LOAD_STORE_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload.data,
      };
    case AllUsersTypes.SET_ITEM_PER_PAGE:
      return {
        ...state,
        itemPerPage: action.payload.data.allUsersReducer.itemPerPage + 8,
      };
    case AllUsersTypes.SET_COUNT_ALL_USERS:
      return {
        ...state,
        countAllUsers: action.payload.data.allUsersReducer.countAllUsers + 1,
      };
    case AllUsersTypes.SET_MORE_ALL_USERS:
      return {
        ...state,
        allUsers: [...state.allUsers, ...action.payload.data],
      };
    case AllUsersTypes.SET_STATE_USERS:
      return {
        ...state,
        stateUsers: action.payload.data,
      };
    default:
      return state;
  }
};
