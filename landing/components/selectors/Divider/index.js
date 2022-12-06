import React from "react";
import { useNode } from "@craftjs/core";
import { DividerSettings } from "./DividerSettings";

export const Divider = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { width, height, background, margin, justifyContent } = props;

  return (
    <table
      ref={connect}
      style={{
        width: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: `${justifyContent}`,
      }}
    >
      <tbody
        style={{
          width: `${width == "100%" ? width : `${width}%`}`,
          height,
          background: `rgba(${Object.values(background)})`,
          margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        }}
      ></tbody>
    </table>
  );
};

Divider.craft = {
  displayName: "Divider",
  props: {
    width: "100%",
    height: 1,
    margin: [0, 10, 0, 10],
    justifyContent: "center",
    flexDirection: "row",
    background: { r: 92, g: 90, b: 90, a: 1 },
  },
  related: {
    toolbar: () => {
      return <DividerSettings />;
    },
  },
};
