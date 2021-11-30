import { sessionService } from "../../services/sessionService";

export const loadSessions = () => {
  return async (dispatch) => {
    let sessions = await sessionService.getSessions();

    sessions = sessions.reverse();

    dispatch({ type: "SET_SESSIONS", sessions });
  };
};

export const saveSession = (startDate, endDate) => {
  return async (dispatch) => {
    try {
      const session = await sessionService.addSession(startDate, endDate);
      dispatch({ type: "ADD_SESSION", session });
    } catch (err) {
      throw err;
    }
  };
};

export const currSessionStartDate = (currSessionStartDate, loggedUserId) => {
  return async (dispatch) => {
    try {
      const startDate = await sessionService.setCurrSessionStartDate(
        currSessionStartDate,
        loggedUserId
      );
      dispatch({ type: "ADD_", startDate });
    } catch (err) {
      throw err;
    }
  };
};
