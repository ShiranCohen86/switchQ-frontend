const INITIAL_STATE = {
  user: null,
  employees: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.employee],
      };
    case "UPDATED_USER":
      return {
        ...state,
        user: action.updatedUser,
      };
    case "SET_EMPLOYEES":
      return {
        ...state,
        employees: action.employees,
      };

    case "LOGOUT":
      return {
        user: null,
      };

    case "SET_BALANCE":
      return {
        user: { ...state.user, balance: action.balance },
      };
    case "EDIT_USER":
      return {
        user: {
          ...state.user,
          [action.field]: action.value,
        },
      };
    case "CLEAR_USER_STORE":
      return {
        balance: null,
        fullname: null,
      };

    default:
      return state;
  }
};
