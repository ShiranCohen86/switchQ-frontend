import { userService } from "../../services/userService";

export const login = (userCred) => {
  return async (dispatch) => {
    try {
      const user = await userService.login(userCred);

      dispatch({ type: "SET_USER", user });
    } catch (err) {
      throw err;
    }
  };
};

export const signup = (userCred) => {
  return async (dispatch) => {
    try {
      const user = await userService.signup(userCred);
      dispatch({ type: "SET_USER", user });
    } catch (err) {
      throw err;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    await userService.logout();
    dispatch({ type: "LOGOUT" });
  };
};

export const addEmployee = (userCred) => {
  return async (dispatch) => {
    try {
      const employee = await userService.addEmployee(userCred);
      dispatch({ type: "SET_EMPLOYEE", employee });
    } catch (err) {
      throw err;
    }
  };
};

export const setLoggedInUser = () => {
  return async (dispatch) => {
    const loggedInUser = await userService.getLoggedInUser();
    dispatch({ type: "SET_USER", user: loggedInUser });
  };
};

export const loadEmployees = () => {
  return async (dispatch) => {
    let employees = await userService.getEmployees();

    employees = employees.reverse();

    dispatch({ type: "SET_EMPLOYEES", employees });
  };
};
