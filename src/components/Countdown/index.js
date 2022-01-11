import { Typography } from "@mui/material";
import moment from "moment";
import React, { useCallback, useEffect, useRef, useState } from "react";

const calculateDuration = (eventTime) =>
  moment.duration(
    Math.max(eventTime - Math.floor(Date.now() / 1000), 0),
    "seconds"
  );

const Countdown = ({ eventTime, interval = 1000, ...props }) => {
  const time = new Date(eventTime).getTime();

  const [duration, setDuration] = useState(calculateDuration(time));
  const timerRef = useRef(0);

  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(time));
  }, [time]);

  useEffect(() => {
    timerRef.current = setInterval(timerCallback, interval);

    return () => {
      clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <Typography {...props}>
      {duration.days() ? `${duration.days()} : ` : ""} {duration.hours()} :{" "}
      {duration.minutes()} : {duration.seconds()}
    </Typography>
  );
};

export default Countdown;
