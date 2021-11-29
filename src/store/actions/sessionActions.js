import { sessionService } from "../../services/sessionService";

export const loadSessions = () => {
  return async (dispatch) => {
    let sessions = await sessionService.getSessions();

    sessions = sessions.reverse();

    dispatch({ type: "SET_SESSIONS", sessions });
  };
};
// export const loadTransfersByContactEmail = (contactEmail) => {
//   return async (dispatch) => {
//     let transfers = await transferService.getTransfersByContactEmail(
//       contactEmail
//     );
//     if (!transfers) transfers = null;

//     dispatch({ type: "SET_TRANSFERS", transfers });
//   };
// };

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
  console.log("tets");
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
