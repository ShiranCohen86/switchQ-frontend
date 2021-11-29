import { httpService } from "./httpService";

export const sessionService = {
  addSession,
  getSessions,
  getTransfersByContactEmail,
  setCurrSessionStartDate,
};

async function addSession(startDate, endDate) {
  try {
    return await httpService.post(`session/`, { startDate, endDate });
  } catch (err) {
    throw err;
  }
}

async function getSessions() {
  try {
    return await httpService.get(`session/`);
  } catch {}
}

async function getTransfersByContactEmail(contactEmail) {
  try {
    return await httpService.get(`transfer/${contactEmail}`);
  } catch {}
}
async function setCurrSessionStartDate(startDate, loggedUserId) {
  try {
    return await httpService.post(`session/startDate`, {
      startDate,
      loggedUserId,
    });
  } catch {}
}
