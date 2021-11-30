import { httpService } from "./httpService";

export const userService = {
  getEmployees,
  
  login,
  signup,
  logout,
  getLoggedInUser,
  addEmployee,
  isSigned,
};

window.userService = userService;

async function getEmployees() {
  try {
    return await httpService.get("user/employees");
  } catch (err) {
    throw err;
  }
}

async function login(userCred) {
  try {
    return await httpService.post("auth/login", userCred);
  } catch (err) {
    throw err;
  }

}

async function signup(userCred) {
  try {
    return await httpService.post("auth/signup", userCred);
  } catch (err) {
    throw err;
  }

}

async function addEmployee(userCred) {
  try {
    return await httpService.post("user/addEmployee", userCred);
  } catch (err) {
    throw err;
  }
}

async function logout() {
  return await httpService.post("auth/logout");
}

async function getLoggedInUser() {
  try {
    return await httpService.get("user/loggedInUser");
  } catch (err) {
    throw err;
  }
}

async function isSigned(phone) {
  try {
    return await httpService.get(`user/${phone}`);
  } catch (err) {
    console.log(err.data);
    // throw err;
  }
}
