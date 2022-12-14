import React from "react";
import { Element, useNode } from "@craftjs/core";
import { Resizable } from "re-resizable";
import { ColumnOne } from "./ColumnOne";

export const ColumnSix = (props) => {
  const { children, BackgroundPicture, Background, PaddingStyle = [], BorderStyle = "", Margin, } = props;
  const { BorderType, color, radius } = BorderStyle;

  const { connectors: { connect } } = useNode((node) => ({
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
          color || "#000"
        )})`,
        background: `${Background ? `rgba(${Object.values(Background)})` : ""}`,
        margin: `${Margin?.Top}px ${Margin?.Right}px ${Margin?.Bottom}px ${Margin?.Left}px`,
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              width: "60%",
              textAlign: "center",
              padding: `${PaddingStyle?.Top}px ${PaddingStyle?.Right}px ${PaddingStyle?.Bottom}px ${PaddingStyle?.Left}px`,
            }}
          >
            <Resizable>
              <Element canvas is={ColumnOne} id="1">
                {children}
              </Element>
            </Resizable>
          </td>
          <td
            style={{
              width: "40%",
              textAlign: "center",
              padding: `${PaddingStyle?.Top}px ${PaddingStyle?.Right}px ${PaddingStyle?.Bottom}px ${PaddingStyle?.Left}px`,
            }}
          >
            <Resizable>
              <Element canvas is={ColumnOne} id="2">
                {children}
              </Element>
            </Resizable>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
