import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { currSessionStartDate } from "../../store/actions/sessionActions";
import { Button } from "@mui/material";

export const Stopwatch = ({ loggedUser, addSession }) => {
  const [sessionStartDate, setSessionStartDate] = useState(null);
  const [isTimeout, setIsTimeout] = useState(null);
  const [isTimerOn, setIsTimerOn] = useState(false);
  let msec = 0,
    sec = 1,
    min = 1,
    hour = 1;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      clearTimeout(isTimeout);
    };
  }, [isTimeout]);

  useEffect(() => {
    return () => {
      dispatch(currSessionStartDate(sessionStartDate, loggedUser._id));
    };
  }, [dispatch, sessionStartDate, loggedUser]);

  const setMSec = () => {
    msec = msec + 1;
    setIsTimeout(setTimeout(setMSec, 100));
    if (msec >= 10) {
      setSec();
      msec = 0;
    }
  };

  const setSec = () => {
    if (sec >= 60) {
      setMin();
      sec = 0;
    }
    if (document.getElementById("sec")) {
      if (sec < 10) {
        document.getElementById("sec").innerHTML = "0" + sec;
      } else {
        document.getElementById("sec").innerHTML = sec;
      }
    }
    sec = sec + 1;
  };

  const setMin = () => {
    if (min >= 60) {
      setHour();
      min = 0;
    }
    if (min < 10) {
      document.getElementById("min").innerHTML = "0" + min;
    } else {
      document.getElementById("min").innerHTML = min;
    }
    min = min + 1;
  };

  const setHour = () => {
    if (hour < 10) {
      document.getElementById("hour").innerHTML = "0" + hour;
    } else {
      document.getElementById("hour").innerHTML = hour;
    }
    hour = hour + 1;
  };

  const start = () => {
    if (!isTimerOn) {
      setMSec();
      setSessionStartDate(Date.now());
      setIsTimerOn(true);
    }
  };

  const end = () => {
    if (isTimerOn) {
      clearTimeout(isTimeout);
      setIsTimerOn(false);
      addSession(sessionStartDate, Date.now());
      msec = 0;
      sec = 1;
      min = 1;
      hour = 1;
    }
  };

  return (
    <section className="stopwatch">
      <h2>Start working</h2>
      <div className="display">
        <div id="hour">00</div>
        <div id="min">00</div>
        <div id="sec">00</div>
        {/* <div id="msec">00</div> */}
      </div>

      <Button
        color="success"
        disabled={isTimerOn}
        variant="contained"
        onClick={start}
        className="btn start"
      >
        Start
      </Button>
      <Button
        color="error"
        disabled={!isTimerOn}
        variant="contained"
        onClick={end}
        className="btn end"
      >
        End
      </Button>
    </section>
  );
};
