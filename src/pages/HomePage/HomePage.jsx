import { ModalUser } from "../../cmps/ModalUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Stopwatch } from "../../cmps/Stopwatch/Stopwatch";
import { loadSessions, saveSession } from "../../store/actions/sessionActions";
import { addEmployee, loadEmployees } from "../../store/actions/userActions";
import { useEffect } from "react";
import { SessionsTable } from "../../cmps/SessionsTable";
import { EmployeesTable } from "../../cmps/EmployeesTable/EmployeesTable";
import { Button } from "@mui/material";

export const HomePage = () => {
  const loggedUser = useSelector((state) => state.userReducer.user);
  const employees = useSelector((state) => state.userReducer.employees);
  const sessions = useSelector((state) => state.sessionReducer.sessions);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onGoLogin = () => {
    navigate("/login");
  };
  const onGoSignup = () => {
    navigate("/signup");
  };

  const addSession = (startDate, endDate) => {
    dispatch(saveSession(startDate, endDate)).then(() => {
      dispatch(loadSessions());
    });
  };

  const onAddEmployee = (userCred) => {
    dispatch(addEmployee(userCred))
      .then(() => {
        dispatch(loadEmployees());
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  };

  useEffect(() => {
    if (loggedUser && !sessions.length) {
      dispatch(loadSessions());
    }
  }, [dispatch, loggedUser, sessions.length]);

  useEffect(() => {
    if (loggedUser && !employees?.length) {
      dispatch(loadEmployees());
    }
  }, [dispatch, loggedUser, employees?.length]);
  return loggedUser ? (
    loggedUser.employerId ? (
      <>
        <Stopwatch loggedUser={loggedUser} addSession={addSession} />
        {sessions && <SessionsTable title={"Sessions List"} rows={sessions} />}
      </>
    ) : (
      <div className="home-page logged-user">
        <ModalUser addEmployee={onAddEmployee} />
        {employees && (
          <EmployeesTable title={"Employees List"} rows={employees} />
        )}
      </div>
    )
  ) : (
    <div className="home-page guest">
      <h2>Please SignUp/LogIn</h2>
      <Button variant="contained" onClick={onGoLogin}>
        Log In
      </Button>
      <Button variant="contained" onClick={onGoSignup}>
        Sign Up
      </Button>
    </div>
  );
};
