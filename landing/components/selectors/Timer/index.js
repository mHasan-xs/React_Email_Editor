import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import { useTimer } from "react-timer-hook";
import { TimerSettings } from "./TimerSettings";

let AccessPadding;
let handleTime;

const Timer = ({ expiryTimestamp, fontSize, justifyContent }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <tbody
      style={{
        borderCollapse: "collapse",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        padding: `${AccessPadding[0]}px ${AccessPadding[1]}px ${AccessPadding[2]}px ${AccessPadding[3]}px`,
      }}
    >
      <tr>
        <td style={{ textAlign: "center", padding: "4px" }}>
          <p style={{ fontSize }}>{days}0</p>
          <p>Days</p>
        </td>
      </tr>
      <tr>
        <td>
          <p style={{ fontSize }}>{hours}0</p>
          <p>Hours</p>
        </td>
      </tr>
      <tr>
        <td>
          <p style={{ fontSize }}>{minutes}</p>
          <p>Minutes</p>
        </td>
      </tr>
      <tr>
        <td>
          <p style={{ fontSize }}>{seconds}</p>
          <p>Seconds</p>
        </td>
      </tr>
    </tbody>
  );
};

export const CountDownTimer = (props) => {
  const countDownDate = new Date().getTime();
  const [value, setValue] = useState(countDownDate);

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const milliseconds = value - new Date().getTime();
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(
    (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

  const handleTimeChanng = (e) => {
    const newOne = new Date(e.target.value).getTime();
    setValue(newOne);
  };
  handleTime = handleTimeChanng;

  const {
    fontSize,
    margin,
    padding,
    fontWeight,
    background,
    color,
    textAlign,
    width,
    justifyContent,
  } = props;

  AccessPadding = padding;

  // Set Time
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1200); // 20 minutes timer
  // time.setMilliseconds(time.getMilliseconds() + value);
  return (
    <table
      ref={connect}
      style={{
        width: `${width == "100%" ? width : `${width}%`}`,
        textAlign,
        fontWeight,
        background: `rgba(${Object.values(background)})`,
        color: `rgba(${Object.values(color)})`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
      }}
    >
      <Timer
        expiryTimestamp={time}
        fontSize={fontSize}
        justifyContent={justifyContent}
      />
    </table>
  );
};

const defaultProps = {
  justifyContent: "space-between",
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  background: { r: 0, g: 0, b: 0, a: 1 },
  color: { r: 255, g: 255, b: 255, a: 1 },
  width: "100%",
  height: "auto",
  fontSize: "30px",
  textAlign: "center",
  fontWeight: "500",
};

CountDownTimer.craft = {
  displayName: "Timer",
  props: defaultProps,
  related: {
    toolbar: () => {
      return <TimerSettings handleTime={handleTime} />;
    },
  },
};