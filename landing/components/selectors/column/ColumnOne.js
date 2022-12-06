import React from "react";
import { useNode } from "@craftjs/core";
import ColumnNoContent from "./ColumnNoContent";

export const ColumnOne = (props) => {
  const {
    children,
    BackgroundPicture,
    Background,
    PaddingStyle = [],
    BorderStyle = "",
  } = props;
  const { BorderType, color, radius } = BorderStyle;

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <table
      ref={connect}
      style={{
        width: "100%",
        backgroundImage: `url(${BackgroundPicture || ""})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        border: `${radius || 0}px ${BorderType || ""} rgba(${Object.values(
          color || ""
        )})`,
        background: `${Background ? `rgba(${Object.values(Background)})` : ""}`,
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              textAlign: "center",
              width: "100%",
              padding: `${PaddingStyle[0]}px ${PaddingStyle[1]}px ${PaddingStyle[2]}px ${PaddingStyle[3]}px`,
            }}
          >
            {children ? children : <ColumnNoContent />}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
