import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, setLoggedInUser } from "../../store/actions/userActions";
// import { AccountMenu } from "../AccountMenu";
import { Button } from "@mui/material";

export const AppHeader = () => {
  const loggedUser = useSelector((state) => state.userReducer.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onGoHome = () => navigate("/");

  const onLogout = () => {
    dispatch(logout()).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    if (!loggedUser) dispatch(setLoggedInUser());
  }, [dispatch, loggedUser]);

  return (
    <header className="app-header ">
      <h1 onClick={onGoHome}>switchQ Task</h1>
      {loggedUser && <p>Welcome {loggedUser.fullname}</p>}
      {loggedUser && <Button onClick={onLogout}>Logout</Button>}
    </header>
  );
};
