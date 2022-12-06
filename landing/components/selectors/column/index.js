import React, { useEffect } from "react";
import { useNode } from "@craftjs/core";
import { ColumnSettings } from "./ColumnSettings";
import { Resizable } from "re-resizable";
import ColumnNoContent from "./ColumnNoContent";

export const Column = (props) => {
  const {
    children,
    columnContainer: ColumnContainer,
    background,
    color,
    padding,
    margin,
    picture,
    BorderType,
    radius,
  } = props;

  const BorderStyle = { BorderType, radius, color };

  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <>
      {ColumnContainer ? (
        <ColumnContainer
          children={children}
          BackgroundPicture={picture}
          Background={background}
          BorderStyle={BorderStyle}
          PaddingStyle={padding}
        />
      ) : (
        <table
          ref={connect}
          style={{
            width: "100%",
            margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
          }}
        >
          <tr>
            <td
              style={{
                width: "100%",
                padding: "10px",
                textAlign: "center",
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
                background: `${
                  background ? `rgba(${Object.values(background)})` : ""
                }`,
                backgroundImage: `url(${picture || ""})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                border: `${radius}px ${BorderType || ""} rgba(${Object.values(
                  color
                )})`,
              }}
            >
              <Resizable>{children ? children : <ColumnNoContent />}</Resizable>
            </td>
          </tr>
        </table>
      )}
    </>
  );
};

// DEFUALT PROPS FOR THIS COMPONENTS
const defaultProps = {
  background: { r: 255, g: 255, b: 255, a: 1 },
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  color: { r: 0, g: 0, b: 0, a: 0 },
  radius: 0,
};

Column.craft = {
  displayName: "Column",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ColumnSettings,
  },
};