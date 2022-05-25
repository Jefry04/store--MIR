import React, { useEffect } from "react";
import { formatTime } from "../lib/formatTime";

export default function Countdown({ counter, setCounter }) {
  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((time) => time - 1), 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  return <div>{formatTime(counter)}</div>;
}
