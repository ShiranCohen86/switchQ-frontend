const INITIAL_STATE = {
  sessions: [],
};

export function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_SESSIONS":
      return {
        ...state,
        sessions: action.sessions,
      };
    case "ADD_SESSION":
      if (state.sessions.length) {
        return {
          ...state,
          sessions: [...state.sessions, action.session],
        };
      }
      return {
        ...state,
        sessions: [action.session],
      };
    case "CLEAR_SESSIONS":
      return {
        sessions: null,
      };
    default:
      return state;
  }
}
